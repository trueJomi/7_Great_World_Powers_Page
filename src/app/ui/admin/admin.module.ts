import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './layout/list/list.component';
import { PersonajeFormComponent } from './forms/personaje-form/personaje-form.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
    PersonajeFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
