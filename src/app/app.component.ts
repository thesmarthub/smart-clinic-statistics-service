import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private aRoute: ActivatedRoute) {
    this.aRoute.queryParams.subscribe((data) => {
      if (data.base_url) {
        localStorage.setItem('base_url', data.base_url);
      }
    });
  }
  title = 'statistics-frontend';
}
