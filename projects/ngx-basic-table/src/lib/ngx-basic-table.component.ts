import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxBasicTableColMeta } from './models/ngx-basic-table-col-meta.model';
import { NgxBasicTableMeta } from './models/ngx-basic-table-meta.model';

@Component({
  selector: 'ngx-basic-table',
  template: `
    <table [ngClass]="tabMeta?.classes?.table ? tabMeta.classes.table : ''">
    <thead [ngClass]="tabMeta?.classes?.thead ? tabMeta.classes.thead : ''">
      <tr [ngClass]="tabMeta?.classes?.theadtr ? tabMeta.classes.theadtr : ''">
        <th *ngFor="let meta of colMeta" [ngClass]="tabMeta?.classes?.th ? tabMeta.classes.th : ''">{{meta.displayName}}</th>
      </tr>
    </thead>
    <tbody [ngClass]="tabMeta?.classes?.tbody ? tabMeta.classes.tbody : ''">
      <tr *ngFor="let row of data" [ngClass]="tabMeta?.classes?.tr ? tabMeta.classes.tr : ''">
        <td
          *ngFor="let meta of colMeta"
          [ngClass]="[
            tabMeta?.classes?.td ? tabMeta.classes.td : '',
            meta.link ? 'ngx-simple-table-row-link': ''
          ]"

          (click)="tdClicked(meta, row)"
        >
          {{row | ngxBasicTableGetData: meta.dataType : meta.key}}
        </td>
      </tr>
    </tbody>
  </table>
  `,
  styles: [
    `
    .ngx-simple-table-row-link {
      cursor: pointer;
      color: darkblue;
      text-decoration: underline;
    }
    `
  ]
})
export class NgxBasicTableComponent implements OnInit {


  @Input() colMeta: NgxBasicTableColMeta[] = [];

  @Input() tabMeta: NgxBasicTableMeta;

  @Input() data: any[] = [];

  @Output() linkColClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  tdClicked(meta: NgxBasicTableColMeta, obj: any) {
    if (meta.link) {
      this.linkColClicked.emit(obj);
    }
  }

}
