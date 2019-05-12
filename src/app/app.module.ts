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
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LastBidComponent } from './components/last-bid/last-bid.component';
import { WishlistComponent } from './views/wishlist/wishlist.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component'; 


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
    LastBidComponent,
    WishlistComponent,
    AboutComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
