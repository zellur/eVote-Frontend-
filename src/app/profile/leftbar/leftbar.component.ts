import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onProfile() {
    this.router.navigate(['profile']);
  }
  onElectionPanel() {
    this.router.navigate(['election'], {relativeTo: this.route});
  }
  onTopicsPanel() {
    this.router.navigate(['topics'],{relativeTo: this.route});
  }
  onVotingPanel() {
    this.router.navigate(['votepanel'], {relativeTo: this.route});
  }

}
