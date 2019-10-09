import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import ScheduleInterface from '../models/ScheduleInterface';
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import Session from "../models/Session";


@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  constructor(private http: HttpClient) { }

recupererDate(): Observable<ScheduleInterface[]> {
   return this.http.get<ScheduleInterface[]>(environment.apiDevFestUrl + '/schedule', {withCredentials: true})
       .pipe(tap(((scheduleTab) => localStorage.setItem('schedules', JSON.stringify(scheduleTab)))));
}

    recupererSessions(): Observable<Session[]> {

    return this.http.get<any>(environment.apiDevFestUrl + '/sessions', {withCredentials: true })
        .pipe(map((objectSession) => Object.values(objectSession) as Session[]) ,
            tap((sessionTab) => localStorage.setItem('sessions', JSON.stringify(sessionTab))));
    }
}
