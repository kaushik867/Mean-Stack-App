import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iposts } from './create-posts/create-posts.component';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private _posts = new BehaviorSubject<Iposts[]>([]);
  private _postsArr:Iposts[] = [];
  constructor() { }

  getPosts(): BehaviorSubject<Iposts[]> {
    this._posts.next(Object.assign([], this._postsArr));
    return this._posts;
  }

  addpost(post: Iposts) {
    this._postsArr.push(post);
    this._posts.next(Object.assign([], this._postsArr));
  }

}
