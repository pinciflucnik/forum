import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(dateStr: string, ...args: unknown[]): unknown {
    return moment(dateStr).fromNow();
  }

}
