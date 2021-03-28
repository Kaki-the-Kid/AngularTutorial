import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn:'root'
})
export class NewsService {

  getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=75eccd536a484111bbc1d22cbd6a33c9');
  }

  constructor(private http: HttpClient) { }
}
