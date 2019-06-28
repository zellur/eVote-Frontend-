import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {HttpClient} from '@angular/common/http';
import { AuthToken } from '../models/AuthToken.model';

@Injectable()
export class UserService {
  constructor(private httpClient: HttpClient) { }
  saveUser(user: User) {
    return this.httpClient.post('api/v1/auth/signup', user);
  }
  signInUser(user: User) {
    return this.httpClient.post<AuthToken>('api/v1/auth/signin', user);
  }
  currentUser() {
    return this.httpClient.get<User>('api/v1/auth/currentuser');
  }
  uploadUserImage(formData: FormData) {
    return this.httpClient.post<User>('api/v1/user/uploadProfilepic', formData);
  }
}
