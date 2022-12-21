import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/PageComponents/alerts/alerts.component';
import { HomeComponent } from './components/home/home.component';
import { MilestonesComponent } from './components/milestones/milestones.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { TfrsComponent } from './components/tfrs/tfrs.component';
import { TfrComponent } from './components/tfr/tfr.component';
import { RoutesService } from './routes.service';

@NgModule({
  imports: [RouterModule.forRoot(RoutesService.RouteList)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
