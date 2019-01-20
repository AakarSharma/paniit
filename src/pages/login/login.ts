import { Component, ViewChild } from '@angular/core';
import { AlertController, App, LoadingController, NavController, Slides, IonicPage, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') username;
  @ViewChild('password') password;

  public loginForm: any;
  public backgroundImage = 'assets/imgs/background-2.jpg';

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    private fire: AngularFireAuth
  ) { }

  // Slider methods to slide through login and signup
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }

  // login control goes hare
  login() {
    this.fire.auth.signInWithEmailAndPassword(this.username.value + "@demo.com", this.password.value)
      .then(data => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error => {
        console.log('got an error ', error);
      })
  }

  // register control goes here
  signup() {
    this.navCtrl.push(HomePage);
  }
  // Reset your Password 
  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.');
  }
}
