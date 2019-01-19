import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2'; // using angular2 for firebase
import { AngularFireAuthModule } from 'angularfire2/auth';  // importing auth module of angularfire2
import { AngularFireDatabaseModule } from 'angularfire2/database'; // importing database module of angularfire2
import { AngularFireStorageModule } from 'angularfire2/storage'; // importing storage module of angularfire2
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatisticsPage} from '../pages/statistics/statistics';



// firebase key
var firebaseAuth = {
  apiKey: "AIzaSyBILRe_o6rnKBIhHkMokZk4TV6EdSB-3kE",
  authDomain: "paniit-7cd9c.firebaseapp.com",
  databaseURL: "https://paniit-7cd9c.firebaseio.com",
  projectId: "paniit-7cd9c",
  storageBucket: "paniit-7cd9c.appspot.com",
  messagingSenderId: "711492693498"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StatisticsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseAuth),  // app initilise with the firebase key
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StatisticsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
