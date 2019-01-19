import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';



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

  openLocation(location) {
  	console.log("Location selected");
    this.showList = true;
    const database = this.firedata.database;
		this.options = [];
		database.ref('/').child( this.navParams.get("name")).child(location).once('value', snapshot => {
			snapshot.forEach(child => {
				this.options.push(child.key)
			})
		});

  }

  showOption(option){
		this.navCtrl.push(Statistics,{'name':option.name});    
  }

}
