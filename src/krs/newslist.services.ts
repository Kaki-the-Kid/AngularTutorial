import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})

export class NewsService {
    getNews() {
        return this.http.get('http://www.json-generator.com/api/json/get/cfDzdGsoia?indent=2');
    }

    constructor(private http: HttpClient) {
    }
}