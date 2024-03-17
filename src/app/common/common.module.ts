import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserRoutingModule } from '../user-auth/user-routing.module';
import { ThemesRoutingModule } from '../themes/themes-routing';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ThemesRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class MyCommonModule { }
