import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {RouterOutlet} from '@angular/router'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  data = {};
  constructor(private http: HttpClient)
  {
    this.http.get("https://4200-sebacili-progettodocker-e50kk2w2dtt.ws-eu114.gitpod.io/simple_json")
    .subscribe(
      (data) => this.data = data
    )
  }
}
