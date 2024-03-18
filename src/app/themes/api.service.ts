import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../post-type';
import { Theme } from '../theme-type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getThemes(){
    return this.http.get<Theme[]>('/api/themes');
  }
  getThemeDetails(id:string){
    return this.http.get<Theme>(`/api/themes/${id}`);
  }
  post(postText: {}, id: string){
    return this.http.post<Theme>(`/api/themes/${id}`, { postText });
  }
  addTheme(themeName:string, postText: string){
    return this.http.post('/api/themes', {themeName, postText});
  }
  deletePost(themeId:string | undefined, postId: string){
    return this.http.delete(`/api/themes/${themeId}/posts/${postId}`);
  }
  editPost(themeId:string, postId: string, postText: string){
    return this.http.put(`/api/themes/${themeId}/posts/${postId}`, { postText });
  }
  getPosts(limit?: number){
    return this.http.get<Post[]>(`/api/posts${limit ? `?limit=${limit}`: ''}`);
  }
  subscribe(id: string){
    return this.http.put<Theme>(`/api/themes/${id}`,{});
  }
  like(id: string){
    return this.http.put(`/api/likes/${id}`,{});
  }
}
