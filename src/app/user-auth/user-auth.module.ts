import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    
  ],
  imports: [
    CommonModule, 
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class UserAuthModule { }
