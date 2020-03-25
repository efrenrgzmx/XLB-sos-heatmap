import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sections/home/home.component';
import { HeatmapComponent } from './sections/heatmap/heatmap.component';
import { SymptomsComponent } from './sections/symptoms/symptoms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeatmapComponent,
    SymptomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmJsMarkerClustererModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD0JXT7iRMZGufjrmNmkIRqrW5D_jEoPCE'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
