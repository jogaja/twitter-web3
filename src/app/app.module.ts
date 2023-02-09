import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TweetComponent } from 'src/share/tweet.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,TweetComponent]
})
export class AppModule { }
