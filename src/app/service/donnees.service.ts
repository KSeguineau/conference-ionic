import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import ScheduleInterface from '../models/ScheduleInterface';
import {from, Observable, of, zip} from 'rxjs';
import {filter, flatMap, map, tap} from 'rxjs/operators';
import Session from '../models/Session';
import Presentateur from '../models/Presentateur';


@Injectable({
    providedIn: 'root'
})
export class DonneesService {

    constructor(private http: HttpClient) {
    }

    recupererSessionAvecPresentateur(): Observable<[Session[], Presentateur[]]> {
        const session = this.http.get<any>(environment.apiDevFestUrl + '/sessions', {withCredentials: true})
            .pipe(map((objectSession) => Object.values(objectSession) as Session[]));
        const presentateurs = this.recupererPresentateurs();
        return zip(session, presentateurs);
    }

    recupererDate(): Observable<ScheduleInterface[]> {
        if (localStorage.getItem('schedule')) {
            return of(JSON.parse(localStorage.getItem('schedule')));
        }
        return this.http.get<ScheduleInterface[]>(environment.apiDevFestUrl + '/schedule', {withCredentials: true})
            .pipe(tap(((scheduleTab) => localStorage.setItem('schedules', JSON.stringify(scheduleTab)))));
    }

    recupererSessions(): Observable<Session[]> {
        if (localStorage.getItem('sessions')) {
            return of(JSON.parse(localStorage.getItem('sessions')));
        }
        return this.recupererSessionAvecPresentateur().pipe(map(([sessionTab, presentateurTab]) => {
                sessionTab.map((session) => {
                    if (session.speakers) {
                        session.presentateurs = [];
                        session.speakers.map((id) => session.presentateurs.push(
                            presentateurTab.find((presentateur) => presentateur.id === id)));
                    } else {
                        session.presentateurs = [];
                    }
                    return session;
                });
                return sessionTab;
            }),
            tap((sessionTab) => localStorage.setItem('sessions', JSON.stringify(sessionTab))));
    }

    recupererSessionsById(id: string): Observable<Session> {
        if (localStorage.getItem('sessions')) {
            const sessionsTab: Session[] = JSON.parse(localStorage.getItem('sessions'));
            const session = sessionsTab.find((s) => s.id === parseInt(id, 10));
            if (session) {
                return of(session);
            }
        }
        return this.recupererSessions().pipe(map((sessionTab) => sessionTab.find((session) => session.id === parseInt(id, 10))));
    }

    recupererSessionsByIdPresentateur(id: number): Observable<Session[]> {
        if (localStorage.getItem('sessions')) {
            const sessionsTab: Session[] = JSON.parse(localStorage.getItem('sessions'));
            return of(sessionsTab.filter((session) => {
                if (session.speakers) {
                    return session.speakers.find((idSp) => idSp === id);
                } else {
                    return false;
                }
            }));
        }
        return this.recupererSessions().pipe(map((sessionTab) => sessionTab.filter((session) => session.id === id)));
    }

    recupererPresentateurs(): Observable<Presentateur[]> {
        if (localStorage.getItem('presentateurs')) {
            return of(JSON.parse(localStorage.getItem('presentateurs')));
        }
        return this.http.get<any>(environment.apiDevFestUrl + '/speakers', {withCredentials: true})
            .pipe(map((objectSpeakers) => Object.values(objectSpeakers) as Presentateur[]),
                map((presentateurTab) => presentateurTab.map((presentateur) => {
                    if (typeof (presentateur.id) === 'string') {
                        presentateur.id = parseInt(presentateur.id, 10);
                    }
                    return presentateur;
                })),
                tap((presentateurTab) => localStorage.setItem('presentateurs', JSON.stringify(presentateurTab))));
    }

    recupererPresentateurById(id: string): Observable<Presentateur> {
        if (localStorage.getItem('presentateurs')) {
            const presentateurTab: Presentateur[] = JSON.parse(localStorage.getItem('presentateurs'));
            const presentateur = presentateurTab.find((s) => s.id === parseInt(id, 10));
            if (presentateur) {
                return of(presentateur);
            }
        }
        return this.recupererPresentateurs().pipe(map((presentateurTab) =>
            presentateurTab.find((presentateur) => presentateur.id === parseInt(id, 10))));
    }
}
