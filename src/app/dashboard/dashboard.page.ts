import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../Services/data.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  public slides=[];
  public categories=[];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    speed: 1500
  };

  ionViewWillEnter () {
    this.menu.enable (true, "custom");
    }

  constructor(private menu: MenuController,public data:DataService) { }
  

  ngOnInit() {
    this.slides = this.data.getSlides();
    this.categories = this.data.getCategories();

  }
    
}
