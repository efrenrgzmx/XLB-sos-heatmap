import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './sections/home/home.component';
import {SymptomsComponent} from './sections/symptoms/symptoms.component';
import {HeatmapComponent} from './sections/heatmap/heatmap.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'symptoms',      component: SymptomsComponent },
  { path: 'map',      component: HeatmapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
