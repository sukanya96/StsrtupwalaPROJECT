import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    NgCircleProgressModule.forRoot({
      // set defaults here
      "radius": 100,
      "outerStrokeWidth": 16,
      "innerStrokeWidth": 8,
      "outerStrokeColor": "#e62020",
      "innerStrokeColor": "#f2f22c",
      "subtitleColor":"green",
      "titleColor":"Red",
      "animationDuration": 300,
      "title":"UI",
      "showUnits":false,
      "clockwise":true,
      "startFromZero": false,
      "showBackground": false,
      
    }),BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
