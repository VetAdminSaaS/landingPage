import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { PagesModule } from './app/pages/pages.module';
import { SharedModule } from './app/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    PagesModule,
    SharedModule
  ]
})
export class AppModule { }
