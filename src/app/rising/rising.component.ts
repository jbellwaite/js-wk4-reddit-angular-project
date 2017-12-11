import { Component, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-rising',
  templateUrl: './rising.component.html',
  styleUrls: ['./rising.component.css']
})
export class RisingComponent {

posts: Post [] = [
  new Post("After playing in the snow", "https://i.redditmedia.com/FJT1VobHUao5W5Mu5dzeXAdUeCmfpDbrtDFli15uLhI.jpg?w=571&s=ef0cb861b881ad76cd6eaedd234c5f00", ""),
  new Post("This piece of chicken I ordered looks like an upvote arrow", "https://i.redditmedia.com/zPpiJSAUABjEOuDzEnfVvu_orvPd2HygD6VoVXtg6EM.jpg?w=576&s=fd432c1aeffe814aa24b0ef66454f230", ""),
  new Post("The Monday feeling", "https://i.redditmedia.com/py1mUsnFKFDTnxJNlhT6xY3aOqVHOACj_VHVirLv-Y4.jpg?w=576&s=bcdec5f40d54a95388d6a6cb9fc4bd4b", "")

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
