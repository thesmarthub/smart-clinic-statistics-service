import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryService {
  broadcaster = new BehaviorSubject<{ event: AppEvent; data: any }>(null);
  baseURL = environment.baseURL;
  // baseURL = "http://localhost:5005/";

  cards = new BehaviorSubject<Record<string, any>[]>([]);
  activeCard;
  dateRange = {
    startDate: moment().format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
  };
  medicalHistory;
  config;
  patient;

  constructor(public _http: HttpClient) {}

  fetchCards() {
    this._http.get(`${this.baseURL}history-cards`).subscribe(
      (res: IResult) => {
        if (res && Array.isArray(res?.result)) {
          this.cards.next(res.result);
        } else {
          alert(res.message ?? 'Something went wrong!');
        }
      },
      (err) => {
        console.log(err);
        alert('Something went wrong');
      }
    );
  }

  fetchHistory(key, hospital_number) {
    this._http.get(`${this.baseURL}medical-history?key=${key}&hospital_number=${hospital_number}`).subscribe(
      (res: IResult) => {
        this.medicalHistory = res.result;
        this.config = res.config;
        console.log(this.medicalHistory, "me hx");
      },
      (err) => {
        console.log(err);
        alert('Something went wrong');
      }
    );
  }

  fetchPatientData(hospitalNumber) {
    this._http
      .get(`${this.baseURL}patient-info?hospital_number=${hospitalNumber||''}`)
      .subscribe(
        (res: IResult) => {
          if (res?.result) {
            this.patient = res.result;
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  trigger(event: AppEvent, data) {
    this.broadcaster.next({ event, data });
  }

  // runner({ card, event }: { card?; event: AppEvent }) {
  //   switch (event) {
  //     case 'LOAD_HISTORY_MENU':
  //       this.fetchCards(card);
  //       break;
  //     case 'LOAD_STATS_MENU':
  //       this.fetchCards(card);
  //     default:
  //       break;
  //   }
  // }
}

interface IResult {
  result: object;
  error: boolean;
  message: string;
  config: any;
}

export interface ICard {
  model?: string;
  title?: string;
  $title?: string;
  is_origin?: boolean;
  url?: boolean;
  key?: string;
  loadsHistory?: boolean;
  result?: Record<string, any>[];
}

export type AppState =
  | 'INIT'
  | 'LOADED_STATS_MENU'
  | 'LOADED_HISTORY_MENU'
  | 'SELECTED_STATS_CARD'
  | 'SELECTED_HISTORY_CARD';

export type AppEvent = 'DISPLAY_TABLE';
