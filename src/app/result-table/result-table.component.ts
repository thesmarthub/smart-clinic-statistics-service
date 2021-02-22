import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicalHistoryService } from '../medical-history.service';
import { StatisticsService } from '../statistics.service';
import { keys } from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import {
  MatTreeFlatDataSource,
  MatTreeNestedDataSource,
} from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import {MatGridListModule} from '@angular/material/grid-list';
import { Location } from '@angular/common';


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
  hospital_number;
  search_patient


  drugsDisplayedData = [];
  drugs = []
  constructor(
    public mService: MedicalHistoryService,
    private aRoute: ActivatedRoute,
    private location: Location,
    private router:Router

  ) {
    this.aRoute.queryParams.subscribe((data) => {
      this.mService.fetchHistory(data.key, data.hospital_number);
      this.mService.fetchPatientData(data.hospital_number);
      this.key = data.key;
      this.hospital_number = data.hospital_number
    });
  }

  ngOnInit(): void {
    this.aRoute.queryParams.subscribe(params => {
      this.search_patient = params.hospital_number;
    });
  }
  search(){
    this.router.navigateByUrl(`/medical-history?key=${this.key}&hospital_number=${this.search_patient}`)

  }

  pharmRoute(){
    this.router.navigateByUrl(`/medical-history?key=pharmacy&hospital_number=${this.search_patient}`)
  }
  consultationRoute(){
    this.router.navigateByUrl(`/medical-history?key=consultation&hospital_number=${this.search_patient}`)
  }
  radiologyRoute(){
    this.router.navigateByUrl(`/medical-history?key=radiology&hospital_number=${this.search_patient}`)
  }
  labRoute(){
    this.router.navigateByUrl(`/medical-history?key=labouratory&hospital_number=${this.search_patient}`)
  }
  

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
    
    if(!data) return []
    let x = JSON.parse(JSON.stringify(data));

    if (Array.isArray(keys)) {
      keys.forEach((key) => {
        x = x[key];
      });
    }
    if (typeof x === 'object' && !Array.isArray(x)) {
      x = [x];
    }
    
    this.drugs = x
    console.log(this.drugs, "drugs")
    return x;
  }
}
