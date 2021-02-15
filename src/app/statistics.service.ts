import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  broadcaster = new BehaviorSubject<{ event: AppEvent; data: any }>(null);
  baseURL = environment.baseURL;
  cards = new BehaviorSubject<Record<string, any>[]>([]);

  activeCard;

  dateRange = {
    startDate: moment().format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
  };

  constructor(private _http: HttpClient) {}

  fetchCards() {
    this._http.get(`${this.baseURL}dynamic-stats-keys`).subscribe(
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
    if (card) {
      this.activeCard = card;
    }
    this.activeCard.filters?.map((filter) => {
      return { key: filter.key, value: filter.value || '' };
    });

    const filters = this.activeCard.filters;
    let urlPatch = '';
    for (let index = 0; index < filters?.length; index++) {
      const el = filters[index];
      urlPatch += `&${el.key}=${el.value ?? ''}`;
    }

    console.log(urlPatch);

    this.activeCard.loading = true;
    this._http
      .get(
        `${this.baseURL}dynamic-stats?action=${
          this.activeCard?.key ?? ''
        }&start_date=${this.dateRange.startDate}&end_date=${
          this.dateRange.endDate
        }&populate=patient${urlPatch}`
      )
      .subscribe(
        (res: IResult) => {
          if (res && Array.isArray(res?.result)) {
            this.activeCard.result = res.result;
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

  trigger(event: AppEvent, data) {
    this.broadcaster.next({ event, data });
  }
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

export type AppEvent =
  | 'LOAD_STATS_MENU'
  | 'LOAD_HISTORY_MENU'
  | 'SELECT_STATS_CARD'
  | 'SELECT_HISTORY_CARD';
