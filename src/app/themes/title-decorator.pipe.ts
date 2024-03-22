import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleDecorator'
})
export class TitleDecoratorPipe implements PipeTransform {

  transform(title: string, ...args: unknown[]): unknown {
    if (title.length > 30) {
      return title.substring(0,25) + '...';
    }
    
    return title;
  }

}
