import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'news-list',
  template: `
    <h1>her er en liste...</h1>
    <news-list-item *ngFor="let item of data" [name]="item.title"></news-list-item>
    <p></p>
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
