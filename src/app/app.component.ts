import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My application';
  author = 'StevenSanz';
  count = 0;
  imgSource = './../favicon.ico';
  status = false;
  changeStatus(){
    this.count = this.count + 1
    this.status = !this.status;
  }
}
