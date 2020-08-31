import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxBasicTableGetData'
})
export class NgxBasicTableGetData implements PipeTransform {

  private colMeta: {
    dataType: string,
    keys: string[]
  };

  /**
   * Transforms Table Data based on input parameters
   * @param obj Current Row/Obj to fetch data from
   * @param args Array of meta data.
   * args Index 0. DataType(string | number | date | img) as String
   * args Index 1. keypath in dotted format. eg. person.name.firstname
   */
  transform(obj: any, ...args: string[]): any {
    if (args.length < 2) {
      return '';
    }
    this.colMeta = {
      dataType: args[0],
      keys: args[1].split('.')
    };

    let value: any = {...obj};


    for (const key of this.colMeta.keys) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        value = value[key];
      } else {
        value = undefined;
      }

      if (!value) {
        break;
      }
    }

    return value;
  }
}
