import { Component, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent {

posts: Post [] = [
  new Post("Need Advice. Watching girlfrienda dog", " ", "Gf is out of country for 2.5 weeks. Her dog loves me and im like her second owner. Shes staying in a new house with me and my parents. She was fine with everyone while i was there, even let my brother walk her. Now i went to work and shes barking and showing her teeth to him so he wont go near her amd cant walk her. Not sure what to do other tham lock her up all day in my bedroom"),
  new Post("She has the coolest patterns and colors! :D", "http://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg", " "),
  new Post("Reddit now tracks user information by default. I've linked the page to disable it.", " ", " This is the link to disable it: https://www.reddit.com/personalization"),
  new Post("My uncle getting caught growing weed in the backyard. Circa 1970's", "https://i.redditmedia.com/TfYnVeypnYvkrkzelOPxwg-lV1VJvwxHO9XyZM8ICe0.jpg?w=594&s=247da201cb32b9e78e07c94e767794a5","")
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
