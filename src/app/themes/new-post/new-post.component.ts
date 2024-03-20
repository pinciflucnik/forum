import { Component, inject } from '@angular/core';
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
  constructor(private api: ApiService, private router: Router){
    this.id = this.route.snapshot.params['themeId'];

  }
  postComment(form: NgForm){
    
    let { postText } = form.value;
    if (postText == ''){
      return;

    }
    debugger
    return this.api.post(postText, this.id).subscribe({
    
      next: data => {
        console.log('added post');
        postText = '';
        // this.router.navigate([`/themes`])
      },
      error: err => {
        console.log(err);
        
        alert(err.message);
      }
    })
  }

}
