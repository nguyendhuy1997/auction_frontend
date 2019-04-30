import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import {DetailComponent} from './views/detail/detail.component';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import { CategoryComponent } from './views/category/category.component';
import {HistoryComponent} from './views/history/history.component';
import {PostComponent} from './views/post/post.component';
import {WishlistComponent} from './views/wishlist/wishlist.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'detail/:id', component: DetailComponent},
  { path: 'category/:id', component: CategoryComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'post', component: PostComponent},
  { path: 'wishlist', component: WishlistComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
