import { Component } from '@angular/core';
import { Iposts } from './posts/create-posts/create-posts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-stack-app';
  public posts: Iposts[] = [];

  addPost(post: Iposts) {
    this.posts.push(post);
  }
}
