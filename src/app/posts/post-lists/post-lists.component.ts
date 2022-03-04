import { Component, Input, OnInit } from '@angular/core';
import { Iposts } from '../create-posts/create-posts.component';

@Component({
  selector: 'app-post-lists',
  templateUrl: './post-lists.component.html',
  styleUrls: ['./post-lists.component.css']
})
export class PostListsComponent implements OnInit {
  @Input() postLists: Iposts[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
