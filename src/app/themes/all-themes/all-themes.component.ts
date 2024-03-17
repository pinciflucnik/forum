import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/theme-type';
import { AuthService } from 'src/app/user-auth/auth.service';
import { User } from 'src/app/user-auth/user-type';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-themes',
  templateUrl: './all-themes.component.html',
  styleUrls: ['./all-themes.component.css']
})
export class AllThemesComponent implements OnInit {
  allThemes: Theme[] = [];
  isLoading: boolean = true;
  error: string = '';
  user: User | undefined
  constructor(private api: ApiService, private auth:AuthService){}
  ngOnInit(): void {
    this.api.getThemes().subscribe({
      next: themes => {
        this.allThemes = themes;
        this.isLoading = false;
      },
      error: err => {
        this.isLoading = false;
        this.error = err.message;
      }
    })
  }
}
