import { NgModule } from '@angular/core';
import { NgxBasicTableComponent } from './ngx-basic-table.component';
import { CommonModule } from '@angular/common';
import { NgxBasicTableGetData } from './pipes/ngx-basic-table-get-data.pipe';



@NgModule({
  declarations: [NgxBasicTableComponent, NgxBasicTableGetData],
  imports: [
    CommonModule
  ],
  providers: [
    NgxBasicTableGetData
  ],
  exports: [
    NgxBasicTableComponent
  ]
})
export class NgxBasicTableModule { }
