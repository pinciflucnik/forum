import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Theme } from 'src/app/theme-type';
import { ApiService } from 'src/app/themes/api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  themes: Theme[] = [];
  editBoolean: boolean = false;
  editForm: FormGroup = new FormGroup({
    username: new FormControl(this.profile!.username,[Validators.required, Validators.minLength(5)]),
    email: new FormControl(this.profile!.email)
  })

  constructor(private auth: AuthService, private api: ApiService){
    this.api.getThemes().subscribe((data)=> {
      this.themes = data.filter(t => t.userId._id === this.profile?._id)
      
    });
  }


  get profile() {
    return this.auth.user;
  }
  get userUsername() {
    return this.auth.user?.username
  }
  get userEmail() {
    return this.auth.user?.email
  }

  editToggle(){
    this.editBoolean = !this.editBoolean;
  }

  onSave(){
    const {username, email} = this.editForm.value;
    
    return this.auth.editProfile(username, email).subscribe({
      next: () => {
        this.editBoolean = !this.editBoolean;
        this.auth.getProfile();
        this.profile!.username = username
      },
      error: err => {
        alert(err.message)
      }
    })
  }

  onCancel(e: Event){
    e.preventDefault();
    this.editBoolean = !this.editBoolean;
  }
}
