import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesService } from './services/routes.service';

@NgModule({
  imports: [RouterModule.forRoot(RoutesService.RouteList)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
