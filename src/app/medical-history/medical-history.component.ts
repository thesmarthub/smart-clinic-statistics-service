import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ICard, StatisticsService } from '../statistics.service';
import * as moment from 'moment';
import { MedicalHistoryService } from '../medical-history.service';
import { ActivatedRoute } from '@angular/router';
import { ResultTableComponent } from '../result-table/result-table.component';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.css'],
})
export class MedicalHistoryComponent implements OnInit {
  constructor(
    public matDialog: MatDialog,
    public mService: MedicalHistoryService,
    public aRoute: ActivatedRoute
  ) {
    this.aRoute.queryParams.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.mService?.broadcaster?.subscribe((bc) => {
      console.log(bc);
      if (bc?.event === 'DISPLAY_TABLE') {
        this.activateModal(bc.data, true);
        console.log("model", this.mService.activeModel)
      }
    });
  }

  openCard(card: ICard) {
    if (card.loadsHistory) {
      return this.mService.fetchHistory(card);
    }
    if (!card.is_origin) {
      return this.activateModal(card);
    }
    this.mService.fetchCards(card);
  }

  activateModal(card, hasData = false) {
    // var element = document.getElementById('modal');
    // element.classList.add('is-active');
    // if (!hasData) {
    //   this.mService.fetchStats(card);
    // }
    this.matDialog.open(ResultTableComponent, {
      data: {
        value: {
          card: card,
          model: this.mService.activeModel
        },
      },
    });
  }

  fetchStatsInRange() {
    this.mService.fetchStats(this.mService.activeCard);
  }
}
