import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import ScheduleInterface from '../models/ScheduleInterface';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DonneesService {

  constructor(private http: HttpClient) { }

recupererDate(): Observable<ScheduleInterface[]> {
   return this.http.get<ScheduleInterface[]>(environment.apiDevFestUrl + '/schedule', {withCredentials: true})
       .pipe(tap(((scheduleTab) => localStorage.setItem('schedule', JSON.stringify(scheduleTab)))));
}
}
