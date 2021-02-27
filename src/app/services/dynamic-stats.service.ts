import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root',
})
export class DynamicStatsService {
  baseUrl = environment.baseURL;
  allSchemas: ISchema[] = [];
  selectedSchemas: ISchema[] = [];
  result;
  readonly notifier = new BehaviorSubject<'FETCHED SCHEMAS'>(null);

  constructor(private appService: AppService) {}
  fetchAllSchemas() {
    this.appService.http
      .get(`${this.baseUrl}fetch-all-schemas`)
      .subscribe((res) => {
        if (res && res['result']) {
          this.allSchemas = res['result'];
          this.notifier.next('FETCHED SCHEMAS');
        }
      });
  }

  runQuery(
    payload,
    action: string,
    populateFields,
    selectFields,
    shouldFetchDetails
  ) {
    if (!action.endsWith('s')) {
      action = `${action}s`;
    }
    this.appService.http
      .post(
        `${
          this.baseUrl
        }stats/${action.toLowerCase()}?action=${action}&populate=${populateFields}&select=${selectFields}&fetch_details=${shouldFetchDetails}`,
        payload
      )
      .subscribe((res) => {
        if (res && res['result']) {
          this.result = res['result'];
        }
      });
  }

  get models() {
    return this.allSchemas.map((val) => {
      return val.modelName;
    });
  }
}

interface ISchema {
  modelName: string;
  paths: {
    path: string;
    enumValues: string[];
    instance: string;
  };
}
