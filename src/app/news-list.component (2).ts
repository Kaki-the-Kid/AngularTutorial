import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'news-list',
  template: `
    <h1>her er en liste...</h1>
    <news-list-item *ngFor="let item of data" [name]="item.title"></news-list-item>
    <p></p>

    <h1>Nyheder:</h1>
    <h2>Status: {{status}}</h2>
    <h2>Total Results: {{totalResults}}</h2>
    <ul>
      <li *ngFor="let item of data">{{item.title}}</li>
    </ul>
  `
})
export class NewsListComponent implements OnInit {

  data: any[] = [];
  @Input() status: any;
  @Input() totalResults: any;

  ngOnInit() {
    this.news.getNews().subscribe((data: any) => {
      this.data         = data['articles'];
      this.status       = data['status'];
      this.totalResults = data['totalResults'];
    });
  }

  constructor(private news: NewsService) { }
}
