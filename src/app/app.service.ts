import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppEvent } from './medical-history.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  broadcaster = new BehaviorSubject<{ event: AppEvent; data: any }>(null);
  baseURL = environment.baseURL;
  cards = new BehaviorSubject<Record<string, any>[]>([
    {
      title: 'Statistics',
      is_origin: true,
      url: 'dynamic-stats-keys',
    },
    {
      title: 'Medical History',
      is_origin: true,
      url: 'history-cards',
    },
  ]);

  activeModel = {};
  nestLevel = 0;

  activeCard;

  dateRange = {
    startDate: moment().format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
  };
  constructor() {}
}
