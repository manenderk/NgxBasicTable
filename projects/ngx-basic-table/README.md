# NgxBasicTable
NgxBasicTable provides dynamic generation of table in angular
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/@manenderk/ngx-basic-table) to install NgxBasicTable.

```bash
npm i @manenderk/ngx-basic-table
```

## Usage

Import NgxBasicModule
```
import { NgxBasicTableModule } from 'ngx-basic-table';
```
```
imports: [
  ...
  RouterModule.forChild(routes),
  ...
]
```



Generate an object of type NgxBasicTableColMeta[] to configure column definitions and an another object NgxBasicTableMeta to provide table meta data in your component.ts file.
```
import { NgxBasicTableMeta, NgxBasicTableColMeta } from 'ngx-basic-table';
```
```
tabMeta: NgxBasicTableMeta = {
  classes: {
    table: 'table'
  }
};
```
```
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
  }
]
```
Use ngx-basic-table component in html. 
Provide an array of objects for table data using input parameter "data", tabMeta and colMeta 
```
<ngx-basic-table [tabMeta]="tabMeta" [colMeta]="colMeta" [data]="ipData"></ngx-basic-table>
```

## NgxBasicTableColMeta Definition
```
NgxBasicTableColMeta {
  key: string;
  displayName: string;
  dataType: string;
  link?: boolean;
}
```

## NgxBasicTableMeta Definition
```
NgxBasicTableMeta {
  classes?: {
    table?: string,
    thead?: string,
    tbody?: string,
    tr?: string,
    th?: string,
    td?: string,
    theadtr?: string
  };
}
```
## Inputs
1. Provides columns configurations of table
colMeta: NgxBasicTableColMeta[]

2. Provides table configuration for table
tabMeta: NgxBasicTableMeta

3. Provide table data
data: any[];

## Events
1. linkColClicked
Triggered when the column mentioned as link: true in col meta is clicked. Complete object/row object is emitted by the event.

## License
[MIT](https://choosealicense.com/licenses/mit/)
