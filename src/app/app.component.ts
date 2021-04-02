import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  // public appPages = [
  //   { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
  //   { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
  //   { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
  //   { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  //   { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  // ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  currentPageTitle = 'Dashboard';

  appPages = [
    {
      title: 'Start Business',
      url: '/business',
      img: '/assets/startbusiness.png',
     
    },
    {
      title: 'Protect Business',
      url: '/prtct-business',
      img: '/assets/protectbusiness.png',
      
    },
    {
      title: 'Manage Business',
      url: '/manage-business',
      img: '/assets/managebusiness.png'
    
    },
    {
      title: 'Grow Business',
      url: '/grow-business',
      img: '/assets/growbusiness.png'
    
    },
    {
      title: 'Get 21 Free Agreements',
      url: '/free-agree',
      img: '/assets/agreement.png'
    },
    {
      title: 'Payment',
      url: '/payment',
      img: '/assets/payment.png'
    }
  ];

  constructor(
    private platform: Platform, private menu: MenuController,
  ) {
    this.initializeApp();
  }
  menuclose(){
    this.menu.close();
  }
  initializeApp() {
    this.platform.ready().then(() => {
    });
  }
}
