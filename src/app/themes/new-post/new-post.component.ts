import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id: string = '';
  @Output() isPosted = new EventEmitter<boolean>()
  constructor(private api: ApiService, private router: Router){
    this.id = this.route.snapshot.params['themeId'];

  }
  checkIfPosted(value: boolean) {
    this.isPosted.emit(value);
  }
  postComment(form: NgForm){
    
    let { postText } = form.value;
    if (postText == ''){
      return;

    }
    return this.api.post(postText, this.id).subscribe({
    
      next: () => {
        form.reset();
        this.checkIfPosted(true);

      },
      error: err => {
        
        alert(err.message);
      }
    })
  }

}
