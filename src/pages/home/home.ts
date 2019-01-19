import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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


	constructor(public navCtrl: NavController) {

	}

	showCategory(but) {
		console.log("Hello Aakar and Vikas");
		this.navCtrl.push(ListPage);
	}

}
