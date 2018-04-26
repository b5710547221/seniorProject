import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DashMainPage } from '../dash-main/dash-main';
import firebase from 'firebase';
import { Facebook ,FacebookLoginResponse} from '@ionic-native/facebook'
/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
  
})

export class IndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public facebook: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }
  register(){
    this.navCtrl.push(HomePage);
  }
  login(){
    this.navCtrl.push(DashMainPage);
  }
  // facebookLogin(): Promise<any> {
  //   this.navCtrl.push(DashMainPage);
  //   return this.facebook.login(['email'])
  //     .then( (response) => {
  //       const facebookCredential = firebase.auth.FacebookAuthProvider
  //         .credential(response.authResponse.accessToken);
          
  //         firebase.auth().signInWithCredential(facebookCredential)
  //         .then( (success) => { 
  //           console.log("Firebase success: " + JSON.stringify(success)); 
  //         });
         
  //     }).catch((error) => { console.log(error) });
  // }
  facebookLogin(): Promise<any>{
  return this.facebook.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));
  }
}
