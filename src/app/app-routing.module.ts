import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataCardsComponent} from "./data-cards/data-cards.component"

const routes: Routes = [{path: "", component:DataCardsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
