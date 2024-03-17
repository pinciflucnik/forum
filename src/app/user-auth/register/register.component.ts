import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private auth: AuthService, private router: Router){}
  onRegister(form: NgForm) {
    if (form.invalid){
      return;
    }

    const {username, email, pass, rePass} = form.value;

    if(pass != rePass){
      return;
    }
    const body = {
      username,
      email,
      'password': pass,
      'rePassword': rePass
    }
    return this.auth.register(body).subscribe(() => {
      this.router.navigate(['/themes']);
    })
    
  }
}
