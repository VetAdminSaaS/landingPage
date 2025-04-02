import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServiceLandingComponent } from "./service-landing/service-landing.component";
import { PlanesComponent } from "./planes/planes.component";

export const landingRoutes : Routes = [
 {
    path:'',
    component: HomeComponent
 },
 {
   path:'services',
   component: ServiceLandingComponent
 },
 {
  path:'planes',
  component: PlanesComponent
 }
]