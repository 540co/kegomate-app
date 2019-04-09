import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LevelsComponent } from './home/levels/levels.component';
import { ActivityComponent } from './home/activity/activity.component';
import { ChartsComponent } from './home/charts/charts.component';
import { KegsComponent } from './admin/kegs/kegs.component';
import { KegComponent } from './admin/kegs/keg/keg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LevelsComponent,
    ActivityComponent,
    ChartsComponent,
    KegsComponent,
    KegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
