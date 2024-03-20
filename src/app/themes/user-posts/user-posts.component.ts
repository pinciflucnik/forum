import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post-type';
import { AuthService } from 'src/app/user-auth/auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent {
  posts: Post[] = []
  userId: string = '';
  userPosts: Post[] = [];
  isLoading: boolean = true;
  constructor(private api:ApiService, private auth: AuthService){
    this.auth.getProfile().subscribe((user)=> {
      this.userId = user._id;
      this.api.getPosts().subscribe((posts)=> {
        this.posts = posts;
        this.userPosts = this.posts.filter(p => p.userId._id == this.userId)
        this.isLoading = false;
      })
    })
  }
}
