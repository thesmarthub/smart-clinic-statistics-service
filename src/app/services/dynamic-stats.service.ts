import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppService } from '../app.service';
import {
  ISchemaHelperMap,
  schemaHelperMap,
} from '../contants/schema-constants';

@Injectable({
  providedIn: 'root',
})
export class DynamicStatsService {
  baseUrl = environment.baseURL;
  allSchemas: ISchema[] = [];
  selectedSchemas: ISchema[] = [];
  result;
  activeResultType = 'number';
  runningQuery = false;
  readonly notifier = new BehaviorSubject<'FETCHED SCHEMAS'>(null);

  constructor(private appService: AppService) {}
  fetchAllSchemas() {
    this.appService.http
      .get(`${this.baseUrl}fetch-all-schemas`)
      .subscribe((res) => {
        if (res && res['result']) {
          this.allSchemas = res['result'];
          this.allSchemas?.map((schema) => {
            schema.paths.forEach((pathData) => {
              const helper: ISchemaHelperMap = schemaHelperMap[pathData.path];
              pathData['label'] = pathData.path;
              if (
                helper &&
                (helper.models.includes(schema.modelName) ||
                  helper.models === '*')
              ) {
                pathData.helper = helper;
                if (helper.transform) {
                  pathData['data']['instance'] = helper.transform;
                }
                if (helper.label) {
                  pathData['label'] = helper.label;
                }
                if (helper.hide) {
                  pathData['hide'] = helper.hide;
                }
                if(helper.enum) {
                  pathData['data']['enumValues'] = helper.enum
                }
              }
            });
          });
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
    this.runningQuery = true;
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
      .subscribe(
        (res) => {
          if (res && res['result'] !== null) {
            this.result = res['result'];
            this.activeResultType = typeof this.result;
          }
        },
        (err) => {
          console.log(err);
        },
        () => {
          this.runningQuery = false;
        }
      );
  }

  async findData(searchString, dataType) {
    return await this.appService.http
      .get(`${urls[dataType]}?search=${searchString}`)
      .toPromise()
      .then((res) => {
        if (res['result']) {
          return res['result'];
        }
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  }

  getDateOfBirth(ageVerb: string) {
    const acceptedUnits: string[] = [
      'day',
      'days',
      'week',
      'weeks',
      'month',
      'months',
      'year',
      'years',
    ];
    const timeArr: any = ageVerb
      .trim()
      .split(' ')
      .map((str) => {
        str = str.trim().toLowerCase();
        return str;
      });

    if (typeof Number(timeArr[0]) !== 'number') {
      return alert(`Expected ${timeArr[0]} to be a number`);
    }
    if (!acceptedUnits.includes(timeArr[1])) {
      return alert(
        `Expected ${timeArr[1]} to be one of day, days, week, weeks, month etc.`
      );
    }
    return moment().startOf('day').subtract(Number(timeArr[0]), timeArr[1]);
  }

  get models() {
    return this.allSchemas.map((val) => {
      return val.modelName;
    });
  }
}

interface ISchema {
  modelName: string;
  paths: [
    {
      path: string;
      enumValues: string[];
      instance: string;
      helper: ISchemaHelperMap;
    }
  ];
}

const urls = {
  findICD: '/find-icd',
};
