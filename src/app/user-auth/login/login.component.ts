import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private auth: AuthService, private router: Router){}
  onLogin(form: NgForm) {
    if (form.invalid){
      return;
    }
    const {email, pass } = form.value;
    const body = {
      email,
      'password': pass
    }
    return this.auth.login(body).subscribe({
      next: ()=> {
      this.router.navigate(['/themes'])},
      error: err => {
        if(err.status == 401){
          alert('Wrong password or email!')
        }
      }
    })
  }
}
