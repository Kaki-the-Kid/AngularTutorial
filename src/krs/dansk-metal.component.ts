import { Component, OnInit } from "@angular/core";
import { HttpClient } from 'selenium-webdriver/http';

@Component ({
    selector: 'app-krs-kursus',
    template: `
        <p>Her er min {{name}} Angular App</p>
    `
})

export class AppComponent implements OnInit {
    enviroment: string;
    constructor(private http: HttpClient) {}
    
    runThis(data){
        console.log('from child', Date);
    }

    ngOnInit() {
        this.enviroment = 'dumme';

    }
}

