import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reddit!';
}

export class Post {
  public showing: boolean = false;
  constructor(public title: string, public image: string, public content: string) {}
}
