import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AfterloginComponent } from './afterlogin/afterlogin.component';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AfterloginComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/LoginComponent', pathMatch: 'full' },
      {path: 'AppComponent', component: AppComponent},
      {path: 'LoginComponent', component: LoginComponent},
      {path: 'AfterloginComponent', component: AfterloginComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
