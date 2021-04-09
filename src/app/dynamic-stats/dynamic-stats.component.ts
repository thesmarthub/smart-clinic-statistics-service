import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { DynamicStatsService } from '../services/dynamic-stats.service';
import {  DateFormatter } from '../services/dynamic-stats.service';

@Component({
  selector: 'app-dynamic-stats',
  templateUrl: './dynamic-stats.component.html',
  styleUrls: ['./dynamic-stats.component.css'],
})
export class DynamicStatsComponent implements OnInit {
  constructor(public dService: DynamicStatsService) {}
  selectedSchema;
  selectedPaths = [];
  subs: Subscription[] = [];
  fetchOnlyCount = true;
  keySubs: Record<string, Subscription> = {};

  selectFieldControl = new FormControl();
  selectedFieldFilterOptions = [];

  formCtrls: Record<string, FormControl> = {};

  ngOnInit(): void {
    
    this.dService.fetchAllSchemas();
    const sub1 = this.dService.notifier.subscribe((event) => {
      if (event === 'FETCHED SCHEMAS') {
        this.selectedSchema = this.dService.allSchemas[0];
      }
    });
    this.subs.push(sub1);
    this.selectFieldControl.valueChanges.subscribe((str) => {
      this.selectedFieldFilterOptions = this.selectedSchema.paths?.filter(
        (value) => {
          if (!str) return false;
          return value.label
            ?.toLowerCase()
            ?.includes(String(str)?.toLowerCase());
        }
      );
    });
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => {
      if (!sub.closed) {
        sub.unsubscribe();
      }
    });
  }

  selectSchema(schema) {
    this.selectedSchema = schema;
    this.selectedPaths = [];
  }
  
  selectPath(pathData, filterInput?) {
    this.selectedPaths.push(pathData);
    filterInput.value = '';
  }

  removePath(index) {
    this.selectedPaths.splice(index, 1);
  }

  
age(age) {
    return DateFormatter.convertDateOfBirth(moment(age))
    
  }


  fetchResult() {
    let populateFields = '';
    let selectFields = '';
    let foundDateFilter = false;
    
    const payload: Record<string, Record<string, any> | ''> = {
      data: {},
      range: {},
      arrays: {},
    };
    this.selectedPaths.forEach((pathData) => {
      if (pathData.data?.instance === 'Date') {
        foundDateFilter = true;
      }
      selectFields += `${pathData.path} `;
      if (pathData.data?.instance === 'ObjectID') {
        populateFields += ` ${pathData.path}`;
      }
      if (pathData.searchValue) {
        if (pathData.path === 'diagnosis') {
          payload.arrays['diagnosis.code'] = pathData.searchValue
            .trim()
            .split(',');
        } else {
          payload.data[pathData.path] = pathData.searchValue;
        }
      }
      
      if (pathData.startRange) {
        payload.range[pathData.path] = {
          ...payload.range[pathData.path],
          gte: pathData.startRange.toISOString(),
        };
      }
      
      if (pathData.endRange) {
        payload.range[pathData.path] = {
          ...payload.range[pathData.path],
          lte: pathData.endRange.toISOString(),
        };
      }

      if (pathData.startRangeStr) {
        const dob = this.dService.getDateOfBirth(pathData.startRangeStr);
        if (dob) {
          payload.range[pathData.path] = {
            ...payload.range[pathData.path],
            lte: dob.toISOString(),
          };
        }
      }
      if (pathData.endRangeStr) {
        const dob = this.dService.getDateOfBirth(pathData.endRangeStr);
        if (dob) {
          payload.range[pathData.path] = {
            ...payload.range[pathData.path],
            gte: dob.toISOString(),
          };
        }
      }
    });

    if (!this.fetchOnlyCount && !foundDateFilter) {
      return alert('You must select a date range when fetching data.');
    }
    this.dService.runQuery(
      payload,
      this.selectedSchema.modelName,
      populateFields,
      selectFields,
      !this.fetchOnlyCount
    );

    console.log(payload);


  }

  // formControlGenerator(path) {
  //   if (path === 'diagnosis' && !this.formCtrls['diagnosis']) {
  //     console.log("form contrl created")
  //     this.formCtrls['diagnosis'] = new FormControl();
  //     this.subscriptionGenerator(path)
  //   }
  // }

  // reinitializeForms() {
  //   Object.keys(this.formCtrls).forEach((key) => {
  //     this.formCtrls[key].reset();
  //   });
  // }

  // destroyForms() {
  //   Object.keys(this.keySubs).forEach((key) => {
  //     if (!this.keySubs[key].closed) {
  //       this.keySubs[key].unsubscribe();
  //     }
  //   });
  //   this.formCtrls = {};
  // }

  // subscriptionGenerator(path) {
  //   this.keySubs[path] = this.formCtrls[path].valueChanges
  //     .pipe(debounceTime(500))
  //     .subscribe((data) => {
  //       console.log('Value change watching', data);
  //     });
  // }
}
