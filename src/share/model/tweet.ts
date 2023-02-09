import { NgStyle } from "@angular/common";

export class Tweet{
    public date: Date;
    public message:string;
    public author: string;
    public likes: number;
    public retweets: Tweet[];
    public replies: Tweet[];
    public images: string[];
    constructor(date:Date,message:string,author:string,likes:number,retweets:Tweet[],replies:Tweet[],images:string[]){
        this.date=date;
        this.author=author;
        this.message=message;
        this.likes=likes;
        this.retweets=retweets;
        this.replies=replies;
        this.images=images;
    }
}