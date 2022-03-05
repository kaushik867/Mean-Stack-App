import { Component, Input, OnInit } from '@angular/core';
import { Iposts } from '../create-posts/create-posts.component';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {
  public postLists: Iposts[] = [];
  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.postLists = [...posts];
    })
  }

}
