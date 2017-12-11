import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { HotComponent } from './hot/hot.component';
import { NewComponent } from './new/new.component';
import { RisingComponent } from './rising/rising.component';
import { ControversialComponent } from './controversial/controversial.component';
import { TopComponent } from './top/top.component';
import { GildedComponent } from './gilded/gilded.component';
import { WikiComponent } from './wiki/wiki.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    HotComponent,
    NewComponent,
    RisingComponent,
    ControversialComponent,
    TopComponent,
    GildedComponent,
    WikiComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
