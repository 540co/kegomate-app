import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatStepperModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { KegomateService } from './services/kegomate.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LevelsComponent } from './home/levels/levels.component';
import { ActivityComponent } from './home/activity/activity.component';
import { ChartsComponent } from './home/charts/charts.component';
import { KegsComponent, NotifyDialog } from './admin/kegs/kegs.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GaugeComponent } from './home/levels/gauge/gauge.component';
import { ChangeComponent } from './admin/change/change.component';
import { AdjustComponent } from './admin/adjust/adjust.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';

import { ChangeDialog } from './admin/dialogs/change.component';
import { AdjustDialog } from './admin/dialogs/adjust.component';
import { LineComponent } from './home/charts/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LevelsComponent,
    ActivityComponent,
    ChartsComponent,
    KegsComponent,
    NavigationComponent,
    GaugeComponent,
    ChangeComponent,
    AdjustComponent,
    NotificationsComponent,
    ChangeDialog,
    AdjustDialog,
    NotifyDialog,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatStepperModule,
    NgxChartsModule
  ],
  providers: [
    KegomateService
  ],
  entryComponents: [
    ChangeDialog,
    AdjustDialog,
    NotifyDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
