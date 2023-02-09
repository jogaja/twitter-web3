import { Component } from '@angular/core';
import { Tweet } from '../share/model/tweet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-web3';
  public tweets: Tweet[]=[];
  public constructor(){
    let tweet0= new Tweet(new Date(),"Hello World 0",'Jose Garcia',10,[],[],[]);
    this.tweets.push(tweet0);
    this.tweets.push(tweet0);
    let tweet1= new Tweet(new Date(),"Hello World 1",'Jose Garcia',10,[],[],[]);
    this.tweets.push(tweet1);
    let tweet2= new Tweet(new Date(),"Hello World 2",'Jose Garcia',10,[],[],[]);
    this.tweets.push(tweet2);
    let tweet3= new Tweet(new Date(),"Hello World 3",'Jose Garcia',10,[],[],[]);
    this.tweets.push(tweet3);
  }
}
