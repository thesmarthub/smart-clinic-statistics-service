import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-cards',
  templateUrl: './data-cards.component.html',
  styleUrls: ['./data-cards.component.css']
})
export class DataCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items = [1, 2, 3, 4, 5]


  activateModal() {
    var element = document.getElementById("modal");
    element.classList.add("is-active");
  }

   deactivateModal() {
    var element = document.getElementById("modal");
    element.classList.remove("is-active");
  }
}
