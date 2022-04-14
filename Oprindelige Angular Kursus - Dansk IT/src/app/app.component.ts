import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello {{title}}

    <news-list></news-list>

  `
})
export class AppComponent {
  title = 'news';
}
