import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicalHistoryService } from '../medical-history.service';
import { StatisticsService } from '../statistics.service';
import { keys } from 'lodash';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import {
  MatTreeFlatDataSource,
  MatTreeNestedDataSource,
} from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css'],
})
export class ResultTableComponent implements OnInit {
  displayedData = [];
  titles = [];
  key;
  selectedIndex = 0;
  constructor(
    public mService: MedicalHistoryService,
    private aRoute: ActivatedRoute
  ) {
    this.aRoute.queryParams.subscribe((data) => {
      this.mService.fetchHistory(data.key, data.hospital_number);
      this.mService.fetchPatientData(data.hospital_number);
      this.key = data.key;
    });
  }

  ngOnInit(): void {}

  get config() {
    return this.mService.config?.find((config) => config.key === this.key);
  }

  displayedColumns(headers: Record<string, Record<string, string>>[]) {
    return headers.map((header) => header.key);
  }

  modifiedValue(h, element) {
    let modifiedEl = element[h.key];
    if (h.type === 'date') {
      modifiedEl = moment(modifiedEl).format('MMM-DD-YYYY');
    }

    return modifiedEl;
  }

  dataReader(data, keys) {
    // keys = ["booking_info", "edd"]
    if (!data) return [];
    console.log('conf', this.config, keys, data);
    let x = JSON.parse(JSON.stringify(data));

    if (Array.isArray(keys)) {
      keys.forEach((key) => {
        x = x[key];
      });
    }
    if (typeof x === 'object' && !Array.isArray(x)) {
      x = [x];
    }
    return x;
  }
}
