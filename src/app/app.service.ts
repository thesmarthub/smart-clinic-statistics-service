import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppEvent } from './medical-history.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(public http: HttpClient) {}
}
