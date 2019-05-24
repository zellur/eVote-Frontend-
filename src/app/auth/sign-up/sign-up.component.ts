import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   user: User = new User();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user.gender = 'male';
    this.user.country = 'Bangladesh';
  }

  onSubmit() {
    this.authService.signUp(this.user);
    this.clearUserForm();
  }
  clearUserForm() {
    this.user = new User();
    this.user.gender = 'male';
    this.user.country = 'Bangladesh';
  }

}
