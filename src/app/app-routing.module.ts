import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataCardsComponent } from './data-cards/data-cards.component';
import { DynamicStatsComponent } from './dynamic-stats/dynamic-stats.component';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { ResultTableComponent } from './result-table/result-table.component';

const routes: Routes = [
  { path: '', component: DynamicStatsComponent },
  { path: 'history', component: MedicalHistoryComponent },
  { path: 'medical-history', component: ResultTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
