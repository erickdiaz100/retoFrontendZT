import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers:[NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  images = [1, 400, 600, 800].map((n) => `https://picsum.photos/id/${n}/700/500`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
   }

  ngOnInit(): void {
  }

}
