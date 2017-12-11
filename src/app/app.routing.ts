import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ControversialComponent }   from './controversial/controversial.component';
import { GildedComponent } from './gilded/gilded.component';
import { HotComponent } from './hot/hot.component';
import { NewComponent } from './new/new.component';
import { RisingComponent } from './rising/rising.component';
import { TopComponent } from './top/top.component';
import { WikiComponent } from './wiki/wiki.component';

const appRoutes: Routes = [
  {
     path: '',
     component: WelcomeComponent
   },

  {
    path: 'controversial',
    component: ControversialComponent
  },

  {
    path: 'gilded',
    component: GildedComponent
  },

  {
    path: 'hot',
    component: HotComponent
  },

  {
    path: 'new',
    component: NewComponent
  },

  {
    path: 'rising',
    component: RisingComponent
  },

  {
    path: 'top',
    component: TopComponent
  },

  {
    path: 'wiki',
    component: WikiComponent
  },


 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
