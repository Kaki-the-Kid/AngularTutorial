import { Component, Input } from '@angular/core';

@Component({
  selector: 'news-list-item',
  template: `
    Navn: {{name}}
  `
})
export class NewsListItemComponent {
  @Input() name;
}
