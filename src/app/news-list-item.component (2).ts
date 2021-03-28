import { Component, Input } from '@angular/core';

@Component({
  selector: 'news-list-item',
  template: `
    <h1 style="font-size: large;">{{name}}</h1>
    <p>Title:{{title}}</p>
  `
})
export class NewsListItemComponent {
  @Input() name: any;
  @Input() title: any;
}
