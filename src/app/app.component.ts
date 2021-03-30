import { Component } from '@angular/core';
import MyInjectableService from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-demo';
  
  constructor(private myInjectableService: MyInjectableService){
    myInjectableService.do();
  }
}
