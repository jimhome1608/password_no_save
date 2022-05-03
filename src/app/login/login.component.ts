import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() userPassword: string = 'password';
  @Input() userPassword2: string = 'password';

  password_keypad: string = '';

  password_is_focused: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  focusFunction(){
    console.log('focusFunction');
    this.userPassword = '';
  }

  keypad_button_click(val:string) {
    if (val == 'C') {
      this.password_keypad = '';
      return;
    };
    if (val == 'C') {
      this.password_keypad = '';
      return;
    };
    if (val == 'L') {
      if (this.password_keypad === '123') {
        this.router.navigate(['/', 'AfterloginComponent']);
      }
      return;
    };
    this.password_keypad = this.password_keypad + val;
    console.log(this.password_keypad);
  }


  check_password() {
    console.log(this.userPassword);
    if (this.userPassword === 'this') {
      this.router.navigate(['/', 'AfterloginComponent']);
      return true;
    }
    else
      return false;
  }

  check_password2() {
    console.log(this.userPassword2);
    if (this.userPassword2 === 'this') {
      this.router.navigate(['/', 'AfterloginComponent']);
      return true;
    }
    else
      return false;
  }

}
