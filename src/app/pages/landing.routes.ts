import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServiceLandingComponent } from "./service-landing/service-landing.component";

export const landingRoutes : Routes = [
 {
    path:'',
    component: HomeComponent
 },
 {
   path:'services',
   component: ServiceLandingComponent
 }
]