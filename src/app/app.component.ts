import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  users: Array<any>;

  constructor (private _data: DataService) {

    this._data.getUsers()
      .subscribe(
        res => this.users = res
      );
   }

}
