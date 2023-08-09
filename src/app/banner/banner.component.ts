import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = [
    '../../assets/im1.jpg',
    '../../assets/im2.jpg',
    '../../assets/téléchargement.jpg'
  ];
}
