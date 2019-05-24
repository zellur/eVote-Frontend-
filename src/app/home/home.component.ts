import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
 images = [
  'assets/images/slider/slide1.jpg',
  'assets/images/slider/slide2.jpg',
  'assets/images/slider/slide3.jpg'
 ];

   constructor(private config: NgbCarouselConfig) {
    this.config.interval = 10000;
    this.config.wrap = true;
    this.config.keyboard = false;
    this.config.pauseOnHover = false;
    }

  ngOnInit() {
  }
}
