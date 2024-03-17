import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Post } from 'src/app/post-type';
import { Theme } from 'src/app/theme-type';
import { AuthService } from 'src/app/user-auth/auth.service';
import { User } from 'src/app/user-auth/user-type';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  id: string = '';
  theme: Theme | undefined;
  editToggle: boolean = false;
  post: Post | undefined;
  subscriptions: string[] = [];
  themeId: string = '';
 constructor(private api:ApiService, private auth: AuthService, private router: Router){
  this.id = this.route.snapshot.params['themeId'];

  
 }
 get user(): User | undefined {
  return this.auth.user
}  

  ngOnInit(): void {
    this.api.getThemeDetails(this.id).subscribe({
      next: theme => {
        this.theme = theme;
        this.subscriptions = theme.subscribers;
      },
      error: err => {
        alert(err.message)
      }
    });  
  }
  postComment(form: NgForm){
    
    const { postText } = form.value;
    if (postText == ''){
      return;

    }
    
    return this.api.post(postText, this.id).subscribe({
      next: data => {
        this.router.navigate([`/themes`])
      },
      error: err => {
        console.log(err);
        
        alert(err.message);
      }
    })
  }
  onEdit(post: Post){
    this.post = post;
    this.editToggle = !this.editToggle;
  }
  onDelete(themeId: string | undefined, postId: string){
    return this.api.deletePost(themeId, postId).subscribe({
      next: () => {
        this.router.navigate([`/themes`])
      },
      error: err => {
        alert(err.message)
      }
    })
  }
  onCancel(e:Event){
    e.preventDefault();
    this.editToggle = !this.editToggle
  }
  editComment(form:NgForm, post: Post){
    const { postText } = form.value;
    return this.api.editPost(post.themeId._id, post._id, postText).subscribe({
      next: () => {
        this.router.navigate(['/themes'])
      },
      error: err => {
        alert(err.message);
      }
    })
  }
  onSubscribe(id: string){
    console.log('subscribe');
    
    return this.api.subscribe(id).subscribe({
      next: () => {
        this.router.navigate(['themes'])
      },
      error: err => alert(err.message)
      
    })
  }
  onLike(id: string){
    return this.api.like(id).subscribe({
      next: () => {
        this.router.navigate([`/themes`])
      },
      error: err => {
        alert(err.message)
      }
    })
  }
}

