import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Tag } from "../model";

@Injectable()
export class TagService {
    constructor(private readonly httpService: HttpService){

    }

    getTags() : Array<Tag>{
        return this.tags();
    }
    searchTagsBy(name: string) : Array<Tag>{
        var result = this.tags().filter(x=>x.name.includes(name));
        return result;
    }

    tags(){
        var tags = new Array<Tag>();
        var tag = new Tag(1, "دبیرخانه");
        var tag1 = new Tag(2, "پرسنلی");
        var tag2 = new Tag(3, "سرور واسط");
        var tag3 = new Tag(4, "خبر");
        var tag4 = new Tag(5, "ارسال و دریافت");
        var tag5 = new Tag(6, "sql server");
        var tag6 = new Tag(7, "نقل و انتقال پرونده");
        var tag7 = new Tag(8, "پرسنل منتسب به نامه");
        var tag8 = new Tag(9, "امضای کاربر");
        var tag9 = new Tag(10, "مدیریت برنامه های کاربردی");
        tags.push(tag);
        tags.push(tag1);
        tags.push(tag2);
        tags.push(tag3);
        tags.push(tag4);
        tags.push(tag5);
        tags.push(tag6);
        tags.push(tag7);
        tags.push(tag8);
        tags.push(tag9);
        return tags;
    }
}