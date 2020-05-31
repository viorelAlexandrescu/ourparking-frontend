import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ZonesComponent } from './zones/zones.component';
import { VehicleCategoryComponent } from './vehicle-category/vehicle-category.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageInVehicleComponent } from './manage-in-vehicle/manage-in-vehicle.component';
import { ManageOutVehicleComponent } from './manage-out-vehicle/manage-out-vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { SingleParkingZoneComponent } from './single-parking-zone/single-parking-zone.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'zones', component: ZonesComponent},
  {path: 'vehicle-categories', component: VehicleCategoryComponent},
  {path:'manage-categories', component:ManageCategoryComponent},
  {path:'manage-incoming-vehicles', component:ManageInVehicleComponent},
  {path:'manage-outcoming-vehicles', component:ManageOutVehicleComponent},
  {path:'add-vehicle', component:AddVehicleComponent},
  {path:'single-parking-zone', component: SingleParkingZoneComponent},
  {path:'profile', component: ProfileComponent},
  {path:'reset-password', component: ResetPasswordComponent},
  {path:'', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
