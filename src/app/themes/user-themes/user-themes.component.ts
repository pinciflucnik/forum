import { Component } from '@angular/core';
import { Theme } from 'src/app/theme-type';
import { AuthService } from 'src/app/user-auth/auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-themes',
  templateUrl: './user-themes.component.html',
  styleUrls: ['./user-themes.component.css']
})
export class UserThemesComponent {
  id: string = '';
  themes: Theme[] = [];
  isLoading: boolean = true;
  constructor (private auth: AuthService, private api: ApiService){
    this.id = this.auth.user!._id
    this.api.getThemes().subscribe((data)=> {
      this.themes = data.filter(t => t.userId._id === this.id);
      this.isLoading = false;
    })
  }
}
