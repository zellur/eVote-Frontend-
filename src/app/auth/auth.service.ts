import { Injectable } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/apicall/user.service';
import { AuthToken } from '../shared/models/AuthToken.model';
import { Router } from '@angular/router';
import {ConverterService} from '../shared/utils/converter.service';

@Injectable()
export class AuthService {
  currentUser: User;
  constructor(private userService: UserService, private router: Router, private converterService: ConverterService) { }

  signUp(user: User) {
    this.userService.saveUser(user).subscribe(
      (response: User) => {
        console.log(response);
      });
  }
  signIn(user: User) {
    this.userService.signInUser(user).subscribe(
      (auth: AuthToken) => {
        localStorage.setItem('token', auth.accessToken);
        this.getCurrentUser();
      });
  }
  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
  isAuthenticated() {
    return localStorage.getItem('token') != null;
  }
  getCurrentUser() {
    this.userService.currentUser().subscribe(
      (user: User) => {
       this.currentUser = user;
       localStorage.setItem('user', JSON.stringify(this.currentUser));
       this.router.navigate(['profile']);
      });
  }
  getSavedUser() {
    if (localStorage.getItem('user')) {
      this.currentUser = JSON.parse(localStorage.getItem('user'));
    }
    return this.currentUser;
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
