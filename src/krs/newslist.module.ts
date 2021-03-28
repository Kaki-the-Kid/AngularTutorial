import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NewsListComponent } from './newslist.component';

@NgModule({
  declarations: [
    NewsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NewsListComponent]
})

export class NewsListModule { 
    
}
