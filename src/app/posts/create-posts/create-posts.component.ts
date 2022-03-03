import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {
  
  public tittle:string = '';
  public post:string = '';
  public allowPost:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  validate() {
    if(this.post && this.tittle) {
      this.allowPost = true;
      return;
    }
    this.allowPost = false;
  }
  createPost() {
    
  }
}
