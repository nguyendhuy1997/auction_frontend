import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { HeaderComponent } from './views/layouts/header/header.component';
import { FooterComponent } from './views/layouts/footer/footer.component';
import { ItemComponent } from './components/item/item.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { DetailComponent } from './views/detail/detail.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { CategoryComponent } from './views/category/category.component';
import { HistoryComponent } from './views/history/history.component';
import { PostComponent } from './views/post/post.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    CountdownTimerComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    HistoryComponent,
    PostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
