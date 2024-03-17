import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.css']
})
export class NewThemeComponent {
  constructor(private api: ApiService, private router: Router){}
  addTheme(form: NgForm){
    const {themeName, postText} = form.value;
    console.log(themeName);
    console.log(postText);
    return this.api.addTheme(themeName, postText).subscribe({
      next: ()=> {
        this.router.navigate(['/themes'])
      }
    })
    
  }
}
