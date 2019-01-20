import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { StatisticsPage} from '../statistics/statistics';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

// Boolean to select whether to show the list or not
  showList = false;
// Locations feeded by hand for now
	locations = [
		"Delhi",
		"Mumbai",
		"Kolkata"
  ];
// Contains different options for a category
  options = [

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private firedata: AngularFireDatabase) {
    const database = this.firedata.database;
		this.locations = [];
		database.ref('/').child( this.navParams.get("name")).once('value', snapshot => {
			snapshot.forEach(child => {
				this.locations.push(child.key)
			})
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

// Open the choosen location
  openLocation(location) {
  	console.log("Location selected");
    this.showList = true;
    const database = this.firedata.database;
		this.options = [];
		database.ref('/').child( this.navParams.get("name")).child(location).once('value', snapshot => {
			snapshot.forEach(child => {
				this.options.push({"name":child.key})
			})
		});

  }


// open the statistics page
  showOption(option){
		this.navCtrl.push(StatisticsPage,{'name':option.name});    
  }

}
