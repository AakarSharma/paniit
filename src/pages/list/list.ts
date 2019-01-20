import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { StatisticsPage } from '../statistics/statistics';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  showList = false;

  locations = [
    "Delhi",
    "Mumbai",
    "Kolkata"
  ];

  selectedLocation: any;

  options = [

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private firedata: AngularFireDatabase) {
    const database = this.firedata.database;
    this.locations = [];
    database.ref('/').child(this.navParams.get("name")).once('value', snapshot => {
      snapshot.forEach(child => {
        this.locations.push(child.key)
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  openLocation(location) {
    console.log("Location selected");
    this.showList = true;
    const database = this.firedata.database;
    this.options = [];
    this.selectedLocation = location;
    database.ref('/').child(this.navParams.get("name")).child(location).once('value', snapshot => {
      snapshot.forEach(child => {
        this.options.push({ "name": child.key })
      })
    });

  }

  showOption(option) {

    this.navCtrl.push(StatisticsPage, {
      "area": this.navParams.get("name"),
      "location": this.selectedLocation,
      'name': option.name
    });
  }

}
