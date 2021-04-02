import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, MenuController, ModalController, NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {

  public formcontrol : FormGroup;
  valid: boolean;
  errmsg: any;
  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;
  //public data: Login = new Login;
  
  constructor(public fb: FormBuilder, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private myRoute: Router,
    private menu: MenuController,private nav:NavController,public platform:Platform ) { 
    this.menu.enable(false, "custom");                   

    this.formcontrol = this.fb.group({
    email: ['', [Validators.required,Validators.pattern("[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]],
   
  });
    
  }
  
  ngOnInit() {
    //this.login();
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
    this.menu.enable (false,'main-content');
  }
  
  get errorControl() {
    return this.formcontrol.controls;
  }
}
