import { Component, OnInit } from '@angular/core';
import {  Post  } from '../app.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

posts: Post [] = [
  new Post("ITAP of my coworker. I think he looks like a civil war officer","https://i.redditmedia.com/bBpGjOSNJKECbAsHUnLfRUYD5dZAxqyv27fH7HEVvKI.jpg?w=548&s=f662c8882ccc6ae4004a381e8e6eb4fb", ""),
  new Post("ITAP of Chinatown SF", "https://i.redditmedia.com/Qcvd87na_F93BRNOjnShe0WeKdG9VIJSS9OlGvXWPlk.jpg?w=1024&s=e66ae6fee58a30b2b8888965b30858d0", ""),
  new Post("When EA made life fun", "https://i.redditmedia.com/M9YXsAbpNPDQUP2VqjG5JVkzExbpDWXTUBuBsHZD70k.jpg?w=576&s=14a0a89d769e824b13665b5c01caf2ca", "")
];

selectedPosting: Post = this.posts[0];
selectedPost = null;

newPost(title, url, content) {
  let newposting = new Post(title, url, content);
  this.posts.push(newposting);
}

viewPost(currentPost){
  if(currentPost.showing) {
    this.selectedPost = null;
    currentPost.showing = false;
  } else {
    this.selectedPost = currentPost;
    currentPost.showing = true;
  }
}

}
