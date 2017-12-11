import { Component, OnInit } from '@angular/core';

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

export class Post {
  public showing: boolean = false;
  constructor(public title: string, public image: string, public content: string) {}
}
