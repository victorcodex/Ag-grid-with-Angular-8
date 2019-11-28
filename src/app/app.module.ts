import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AgGridModule} from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { EquipmentComponent } from './equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecializationComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents(
      [SpecializationComponent, EquipmentComponent]
    ),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
