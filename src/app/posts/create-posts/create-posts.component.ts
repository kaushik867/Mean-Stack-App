import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.css']
})
export class CreatePostsComponent implements OnInit {
  
  public tittle:string = '';
  public post:string = '';
  public allowPost:boolean = false;
  @Output() postCreated = new EventEmitter();

  constructor(private postService: PostService) { }

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
    if (this.allowPost) {
      const post = {
        tittle: this.tittle,
        post: this.post,
      }

      this.postService.addpost(post);

      this.tittle = '';
      this.post = '';
    }
  }
}


export interface Iposts {
  tittle: string,
  post: string,
}