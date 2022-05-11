import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tmp-ulys-tools-return-control';

  handleClick(){
    console.log("toto")
  }
}
