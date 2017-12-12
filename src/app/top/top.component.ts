import { Component, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {

posts: Post [] = [
  new Post("My 8 year old daughter has just discovered Bob Ross", "https://i.redditmedia.com/NIpO3uO5NACCLkhFWBooZy5YmMW3zX5zIBo6pHnsLtM.jpg?w=976&s=8fa0084fbe3f0e2469395e070d35f199", ""),
  new Post("When Mario Maker hits too close to home", "https://i.redditmedia.com/cFJD2QWkjOp5EM3OY5--nSuMlW-fuhLaNcNN6IjRALk.jpg?w=750&s=e33bcc44289a4e4b0b4a35ac700aa583", ""),
  new Post("Fuck Comcast", "https://i.imgur.com/SlsH7mY.jpg", "")
];

selectedPosting: Post = this.posts[0];
selectedPost = null;
clickedButton = false;

newPost(title, url, content) {
  let newposting = new Post(title, url, content);
  this.posts.push(newposting);
}

clickAdd(){
  this.clickedButton = !this.clickedButton;
}

deletePost() {
  let deletedPost = this.selectedPost;
  let index = this.posts.indexOf(deletedPost);
  this.posts.splice(index, 1);
  this.viewPost(deletedPost);
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
