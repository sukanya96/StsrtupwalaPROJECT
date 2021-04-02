import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController, } from '@ionic/angular';
//import { Register } from '../Models/class';
import {RestService } from '../Services/'

@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
  public registerForm : FormGroup;
  emailAlredyExist = "";

  valid: boolean;
  errmsg: any;
  invalid=false;
  dirty=false;
  touched=false;

  public formValid = true;
  showMsg: boolean = false;
  isSubmitted = false;
  //public data: Register = new Register;
  
  constructor(public fb: FormBuilder, private alertCtrl: AlertController,
    private modalCtrl: ModalController, private myRoute: Router,
    private loadingCtrl: LoadingController,private rest:RestService) { 

    this.registerForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), (Validators.maxLength(20)), 
      (Validators.minLength(5))]],

      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password:['',[Validators.required, (Validators.maxLength(20)), 
      (Validators.minLength(6))]],

      roles: this.fb.array(['USER'])  
   });
  }
  

  ngOnInit() {
   // this.register();
    this.valid=false;
    this.errmsg=false;
    this.isSubmitted = false;
    this.invalid=false;
    this.dirty=false;
    this.touched=false;
    
  }


  get errorControl() {
    return this.registerForm.controls;
  }

  getregister(){
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      return false;
    } 
  this.loadingCtrl.create({
    message:"Registering...",
    mode:'ios',
    cssClass:'register-loader',
    duration: 4000,
    spinner: 'crescent',
  }).then((ele)=>{
    ele.present();  
    Object.assign(this.data, this.registerForm.value);
    console.log(this.data);
    this.rest.Register(this.data).subscribe((result)=>{
    console.log(result);
    this.showAlert('Registered Successfully...');
    ele.dismiss();
    this.myRoute.navigate(['/login']);
    },(error)=>{
      if(error.status==0){
        this.showtoast('Server is low, Please try again later');
        console.log(error);
      }else{
        if(error.status==400){
          this.showtoast('status 400');
          console.log(error);
          //this.registerForm.reset();  
        }
      }
    })
  })

}
