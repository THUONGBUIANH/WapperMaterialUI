import { NgModule } from '@angular/core';
import {
    MatTableModule,
    MatSliderModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
 } from '@angular/material';


@NgModule({
  exports: [
    MatTableModule,
    MatSliderModule,
    MatSortModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {}
