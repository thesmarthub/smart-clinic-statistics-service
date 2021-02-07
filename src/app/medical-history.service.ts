import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root',
})
export class MedicalHistoryService extends AppService {
  constructor(public _http: HttpClient) {
    super();
    this.broadcaster = new BehaviorSubject(null);
    this.nestLevel = 0;
  }

  fetchCards(card) {
    this._http.get(`${this.baseURL}${card.url}`).subscribe(
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

  fetchStats(card: ICard) {
    this.activeCard = card;
    this.activeCard.loading = true;
    this._http
      .get(
        `${this.baseURL}dynamic-stats?action=${card.key ?? ''}&start_date=${
          this.dateRange.startDate
        }&end_date=${this.dateRange.endDate}&populate=patient`
      )
      .subscribe(
        (res: IResult) => {
          if (res && Array.isArray(res?.result)) {
            card.result = res.result;
            this.trigger('DISPLAY_TABLE', card.result);
          }
        },
        (err) => {
          console.log(err);
          alert('Could not fetch stats');
        },
        () => {
          this.activeCard.loading = false;
        }
      );
  }

  fetchHistory(card: ICard) {
    this._http
      .get(
        `${this.baseURL}query-runner?key=${card.key}&query=${
          card.loadsHistory ? 'medical-history' : ''
        }`
      )
      .subscribe(
        (res: IResult) => {
          if (res && Array.isArray(res?.result)) {
            card.result = res.result;
            this.activeCard = card;
            this.activeModel = card.model;
            console.log("Active card before display", this.activeModel)
            this.trigger('DISPLAY_TABLE', card.result);
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
