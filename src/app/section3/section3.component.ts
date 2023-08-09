import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css'],

})
export class Section3Component implements OnInit {
 title='ngrxdemo';

  constructor(){}

  ngOnInit(){ }
  url : string ="../../assets/phone.jpg";
  url2 : string ="../../assets/fri.jpg";
  url3: string="../../assets/tv.jpg";
  url4: string="../../assets/phone.jpg";


  changeImage(event:any){
    this.url = event.target.src;

  }
    changeImage2(event:any){
      this.url2 = event.target.src;

  }
  changeImage3(event:any){
    this.url3 = event.target.src;

}
changeImage4(event:any){
  this.url4 = event.target.src;

}
 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }


  policyOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-caret-left" ></i>', '<i class="fa fa-caret-right" ></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
}
