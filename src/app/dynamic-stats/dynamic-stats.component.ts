import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicStatsService } from '../services/dynamic-stats.service';

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

  ngOnInit(): void {
    this.dService.fetchAllSchemas();
    const sub1 = this.dService.notifier.subscribe((event) => {
      if (event === 'FETCHED SCHEMAS') {
        this.selectedSchema = this.dService.allSchemas[0];
      }
    });
    this.subs.push(sub1);
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
  }

  selectPath(pathData) {
    this.selectedPaths = pathData;
  }

  fetchResult() {
    let populateFields = '';
    let selectFields = '';
    const payload: Record<string, Record<string, any> | ''> = {
      data: {},
      range: {},
    };
    this.selectedPaths.forEach((pathData) => {
      selectFields += `${pathData.path} `;
      if (pathData.data?.instance === 'ObjectID') {
        populateFields += ` ${pathData.path}`;
      }
      if (pathData.searchValue) {
        payload.data[pathData.path] = pathData.searchValue;
      }
      if (pathData.startRange && pathData.endRange) {
        payload.range[pathData.path] = {
          gte: pathData.startRange.toISOString(),
          lte: pathData.endRange.toISOString(),
        };
      } else if (pathData.startRange) {
        payload.range[pathData.path] = {
          gte: pathData.startRange.toISOString(),
        };
      } else if (pathData.endRange) {
        payload.range[pathData.path] = {
          lte: pathData.endRange.toISOString(),
        };
      }
    });

    this.dService.runQuery(
      payload,
      this.selectedSchema.modelName,
      populateFields,
      selectFields,
      !this.fetchOnlyCount
    );

    console.log(payload);
  }
}
