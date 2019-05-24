import {Component, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/shared/models/user.model';
import {UserService} from '../../shared/apicall/user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
   currentUser: User;
  selectedFiles: FileList;
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
   this.currentUser = this.authService.getSavedUser();
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.currentUser.image = this.selectedFiles.item(0);
    const formData = new FormData();
    formData.append('file', this.currentUser.image)
    this.userService.uploadUserImage(formData).subscribe(
      (response) => {
        this.currentUser = response;
        this.authService.getCurrentUser();
      });
    this.selectedFiles = null;
  }
}
