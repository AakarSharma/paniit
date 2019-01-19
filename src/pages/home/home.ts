import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, ItemSliding } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { ListPage} from '../list/list';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	buts = [
		"Railways",
		"Bank",
		"Airport",
		"Others"
	];


	constructor(public navCtrl: NavController, public navParams: NavParams, private fireauth: AngularFireAuth,
		private firedata: AngularFireDatabase) {
		const database = this.firedata.database;
		this.buts = [];
		database.ref('/').once('value', snapshot => {
			snapshot.forEach(child => {
				this.buts.push(child.key)
			})
		});
	}

	showCategory(but) {
		this.navCtrl.push(ListPage,{'name':but});
	}

}
