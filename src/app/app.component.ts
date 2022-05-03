import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '130238_no_password_save';

  check_password(_password: string) {
    console.log(_password);
    if (_password === 'this')
      return true;
    else
      return false;
  }

}
