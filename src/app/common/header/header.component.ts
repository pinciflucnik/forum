import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/user-auth/auth.service';
import { User } from 'src/app/user-auth/user-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor (private auth: AuthService){}
  get user(): User | undefined {
    return this.auth.user
  }  
}
