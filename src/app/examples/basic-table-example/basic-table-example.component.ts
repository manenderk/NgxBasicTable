import { Component, OnInit } from '@angular/core';
import { NgxBasicTableMeta, NgxBasicTableColMeta } from 'ngx-basic-table';
import { ipData } from 'src/assets/ip-data';

@Component({
  selector: 'app-basic-table-example',
  templateUrl: './basic-table-example.component.html',
  styleUrls: ['./basic-table-example.component.css']
})
export class BasicTableExampleComponent implements OnInit {

  ipData: any[] = ipData;

  tabMeta: NgxBasicTableMeta = {
    classes: {
      table: 'table'
    }
  };

  colMeta: NgxBasicTableColMeta[] = [
    {
      key: 'ip',
      displayName: 'IP',
      dataType: 'string',
      link: true
    },
    {
      key: 'continent_name',
      displayName: 'Continent',
      dataType: 'string'
    },
    {
      key: 'country_name',
      displayName: 'County',
      dataType: 'string'
    },
    {
      key: 'zip',
      displayName: 'Zip Code',
      dataType: 'string'
    },
    {
      key: 'location.capital',
      displayName: 'Captial',
      dataType: 'string'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
