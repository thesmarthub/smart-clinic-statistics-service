import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicalHistoryService } from '../medical-history.service';
import { StatisticsService } from '../statistics.service';
import { keys } from "lodash"

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css'],
})
export class ResultTableComponent implements OnInit {
  @Input() service: MedicalHistoryService | StatisticsService;
  displayedData = [];
  titles = [];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      value: any;
    },
    private dialogRef: MatDialogRef<ResultTableComponent>
  ) {}

  ngOnInit(): void {
    keys(this.data.value?.model?.nests).forEach(key => {
      
    })
  }

  modifyTitles() {
    this.titles = Object.keys(this.service?.activeCard?.model ?? {}).map(
      (key) => {
        return {
          title: this.service.activeCard?.model[key]?.$title,
          key,
        };
      }
    );
  }

  modifyDisplayedData() {
    this.titles.forEach((title) => {
      // if(this.service.activeCard.)
    });
  }

  deactivateModal() {
    this.dialogRef.close();
  }
}
