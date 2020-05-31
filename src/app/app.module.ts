import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ZonesComponent,
    VehicleCategoryComponent,
    ManageCategoryComponent,
    ManageInVehicleComponent,
    ManageOutVehicleComponent,
    AddVehicleComponent,
    SingleParkingZoneComponent,
    ProfileComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
