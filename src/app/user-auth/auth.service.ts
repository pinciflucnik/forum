import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { User } from './user-type';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy{
  private user$$= new BehaviorSubject<User | undefined>(undefined)

  user$ = this.user$$.asObservable();

  user: User | undefined
  USER_KEY = '[user]';
  subscription: Subscription;
  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user)=> {
      this.user = user
    })
    
   }
  register(body: {}){
    return this.http.post<User>('/api/register', body).pipe(tap((user)=> this.user$$.next(user)))
  }
  login(body: {}){
    return this.http.post<User>('/api/login', body).pipe(tap((user)=> this.user$$.next(user)))
  }
  logout() {
    return this.http.post<User>('/api/logout', {}).pipe(tap(() => this.user$$.next(undefined)))
  }
  getProfile() {
    return this.http.get<User>('/api/users/profile').pipe(tap(user => this.user$$.next(user)))
  }
  editProfile(username: string, email: string){
    return this.http.put('/api/users/profile', {username, email});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
