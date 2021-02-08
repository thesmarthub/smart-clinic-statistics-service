import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MedicalHistoryService } from '../medical-history.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    public aRoute: ActivatedRoute,
    private router: Router
  ) {
    this.aRoute.queryParams.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.mService.fetchCards();
  }

  openCard(card, hasData = false) {
    this.router.navigateByUrl(`/medical-history?key=${card.key}`)
    // var element = document.getElementById('modal');
    // element.classList.add('is-active');
    // if (!hasData) {
    //   this.mService.fetchStats(card);
    // }
    // this.matDialog.open(ResultTableComponent, {
    //   data: {
    //     value: {
    //       card: card,
    //     },
    //   },
    // });

  }
}
