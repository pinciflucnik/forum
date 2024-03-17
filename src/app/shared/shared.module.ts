import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';



@NgModule({
  declarations: [LoaderComponent, DateFormatterPipe, ElapsedTimePipe],
  imports: [
    CommonModule
  ],
  exports: [LoaderComponent, DateFormatterPipe, ElapsedTimePipe]
})
export class SharedModule { }
