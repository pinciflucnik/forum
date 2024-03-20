import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    username: new FormControl(this.userUsername,[Validators.required, Validators.minLength(5)]),
    email: new FormControl(this.userEmail, [Validators.required, Validators.minLength(6), Validators.email])
  })
  isLoading: boolean = true;

  constructor(private auth: AuthService, private api: ApiService){
    this.api.getThemes().subscribe((data)=> {
      this.themes = data.filter(t => t.userId._id === this.profile?._id)
      this.isLoading = false;
    });
  }
  get formUsername(){
    return this.editForm.get('username')
  }
  get formEmail(){
    return this.editForm.get('email')
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
        this.auth.getProfile();
        this.profile!.username = username
        this.editBoolean = !this.editBoolean;
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
