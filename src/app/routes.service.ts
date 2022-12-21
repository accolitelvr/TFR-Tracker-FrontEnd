import { Injectable } from '@angular/core';
import { AlertsComponent } from './components/PageComponents/alerts/alerts.component';
import { HomeComponent } from './components/PageComponents/home/home.component';
import { MilestonesComponent } from './components/PageComponents/milestones/milestones.component';
import { PermissionsComponent } from './components/PageComponents/permissions/permissions.component';
import { ReportingComponent } from './components/PageComponents/reporting/reporting.component';
import { TfrComponent } from './components/PageComponents/tfr/tfr.component';
import { TfrCreationComponent } from './components/PageComponents/tfr-creation/tfr-creation.component';
import { TfrsComponent } from './components/PageComponents/tfrs/tfrs.component';
import { RouteFull } from './RouteFull';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
  public static RouteList : RouteFull[] = [{name:'Home',showOnNavigationBar:true,
    path:'home',component: HomeComponent
  },
  {
    name:'TFRs',showOnNavigationBar:true,path:'tfrs',component: TfrsComponent
  },
  {
    name:'Home',showOnNavigationBar:false,path:'tfr',component: TfrCreationComponent
  },
  {
    name:'Home',showOnNavigationBar:false,path:'tfr/:id',component: TfrComponent
  },
  {
    name:'Milestones',showOnNavigationBar:true,path:'milestones',component: MilestonesComponent
  },
  {
    name:'Alerts',showOnNavigationBar:true,path:'alerts',component: AlertsComponent
  },
  {
    name:'Reports',showOnNavigationBar:true,path:'reporting',component: ReportingComponent
  },
  {
    name:'Permissions',showOnNavigationBar:true,path:'permissions',component: PermissionsComponent
  },

  { name:'Home',showOnNavigationBar:false,path: '**', redirectTo:'home' }];
  constructor() { }
  getRoutes() {
    return RoutesService.RouteList;
  }
}
