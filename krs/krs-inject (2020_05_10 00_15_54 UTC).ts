import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BeerService {
    getBeerList() {
        return this.http.get('Insert url');
    }

    constructor(private http: HttpClient) {}
    
}