import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loggedGuard } from '../shared/logged.guard';
import { notLoggedGuard } from '../shared/not-logged.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [loggedGuard]},
    { path: 'register', component: RegisterComponent, canActivate: [loggedGuard] },
    { path: 'logout', component: LogoutComponent, canActivate: [notLoggedGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [notLoggedGuard] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
