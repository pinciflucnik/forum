import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user-auth/auth.service';

@Component({
  selector: 'app-state-holder',
  templateUrl: './state-holder.component.html',
  styleUrls: ['./state-holder.component.css']
})
export class StateHolderComponent implements OnInit {
  isAuthenticating = true;
  constructor(private auth: AuthService){
    
  }
  ngOnInit(): void {
    this.auth.getProfile().subscribe({
      next: () => {
        this.isAuthenticating = false
      },
      error: (err) => {        
        // if (err.status !== 401){
        //   alert(err.message)
        // }
        this.isAuthenticating = false
      }
    })
  }
  
}
