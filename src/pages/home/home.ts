import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IndexPage } from '../index';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
  back(){
    this.navCtrl.push(IndexPage);
  }
}
