import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'news-list',
  template: `
    her er en liste...

    <news-list-item *ngFor="let item of data" [name]="item.title"></news-list-item>

  `
})
export class NewsListComponent implements OnInit {

  data: any[] = [];

  ngOnInit() {
    this.news.getNews().subscribe((data: any) => {
      this.data = data['articles'];
    });
  }


  constructor(private news: NewsService) { }
}
