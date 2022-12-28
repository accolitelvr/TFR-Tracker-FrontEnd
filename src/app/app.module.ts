import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreMaterialModule } from './core-modules/core-material/core-material.module';
import { HomeComponent } from './components/PageComponents/home/home.component';
import { TfrsComponent } from './components/PageComponents/tfrs/tfrs.component';
import { MilestonesComponent } from './components/PageComponents/milestones/milestones.component';
import { AlertsComponent } from './components/PageComponents/alerts/alerts.component';
import { ReportingComponent } from './components/PageComponents/reporting/reporting.component';
import { TfrComponent } from './components/PageComponents/tfr/tfr.component';
import { TfrCreationComponent } from './components/PageComponents/tfr-creation/tfr-creation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipComponent } from './components/common/chip/chip.component';
import { FormComponent } from './components/common/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TfrsComponent,
    MilestonesComponent,
    AlertsComponent,
    ReportingComponent,
    TfrComponent,
    TfrCreationComponent,
    ChipComponent,
    FormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
