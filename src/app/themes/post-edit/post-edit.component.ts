import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/post-type';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  @Input() postToEdit : Post | undefined;
  @Input() oldComment: string = '';
  @Output() toggleFromChild = new EventEmitter<boolean>();
  
  editForm: FormGroup = new FormGroup ({})
  postText= new FormControl ('', Validators.required)
  constructor(private api:ApiService, private router: Router){};
  get formText (){
    return this.editForm.get('postText')
  }
  ngOnInit(): void {
    this.postText.setValue(this.postToEdit!.text)
  }
  toggleView(value: boolean) {
    this.toggleFromChild.emit(value);
  }
  onCancel(e:Event){
    e.preventDefault();
    this.toggleView(false)
  }
  editComment(post: Post | undefined){
    const postText = this.editForm.value.postText;
    return this.api.editPost(post!.themeId._id, post!._id, postText).subscribe({
      next: () => {
        this.formText!.setValue('') ;
        this.toggleView(true)
        // this.router.navigate(['/themes'])
      },
      error: err => {
        alert(err.message);
      }
    })
  }
  
}
