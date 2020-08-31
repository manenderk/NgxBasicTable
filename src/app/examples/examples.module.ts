import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableExampleComponent } from './basic-table-example/basic-table-example.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxBasicTableModule } from 'ngx-basic-table';


const routes: Routes = [
  {
    path: '',
    component: BasicTableExampleComponent
  }
];

@NgModule({
  declarations: [BasicTableExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxBasicTableModule
  ]
})
export class ExamplesModule { }
