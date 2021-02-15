import { Component, OnInit } from '@angular/core';
import { ICard, StatisticsService } from '../statistics.service';
import * as moment from 'moment';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.css'],
})
export class DataCardsComponent implements OnInit {
  searchFilter: Record<string, any> = {};
  constructor(public sService: StatisticsService) {}

  ngOnInit(): void {
    this.sService.fetchCards();
  }

  openCard(card: ICard) {
    this.sService.fetchStats(card);
  }

  activateModal(card, hasData = false) {
    var element = document.getElementById('modal');
    element.classList.add('is-active');
    if (!hasData) {
      this.sService.fetchStats(card);
    }
  }

  fetchStatsInRange() {
    this.sService.fetchStats(this.sService.activeCard);
  }

  deactivateModal() {
    var element = document.getElementById('modal');
    element.classList.remove('is-active');
  }

  collectData(filter) {
    this.searchFilter[filter.key] = filter.value;
    console.log(filter);
  }
}
