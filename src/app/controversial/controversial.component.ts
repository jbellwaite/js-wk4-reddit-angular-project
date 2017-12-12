import { Component, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-controversial',
  templateUrl: './controversial.component.html',
  styleUrls: ['./controversial.component.css']
})
export class ControversialComponent {

posts: Post [] = [
  new Post("I got my switch today", "", "so i got my switch today with some accessories and also BOTW and SMO, i'm amazed by the graphics i didn't expect it to be as good as it as can't wait to play more games"),
  new Post("A banana shaped wet floor sign", "https://i.imgur.com/bMKNbxq.jpg", ""),
  new Post("Tequila Works: Blacklisted", "", "I was really looking forward to getting The Sexy Brutale on the Switch. However, I jumped the gun before coming on Reddit, only to see complaint after complaint. I can verify everything that has been said about this. Load times happen often, sometimes causing the game to outright freeze. The frame rate is very spotty & makes for a frustrating time. I’ve looked up to see if these guys know about the issues, only to see that their other game, RIME, is awful & hasn’t been patched. I urge anyone & everyone not to buy The Sexy Brutale on the Switch. The way it currently runs is an embarrassment & the lack of care the developers seem to have is worrying. It makes me think that they aren’t interested in patching their games & optimizing them. If you want the game, get it on PC or PS4, whatever the console. Just do your wallet a favour, stay away from the Switch version until further notice. For me, they’ve been blacklisted & all my trust in them.")
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
