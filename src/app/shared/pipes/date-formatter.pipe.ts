import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(dateString: string, ...args: unknown[]): unknown {
    return moment(dateString).format('Do MMM YY')
  }

}
