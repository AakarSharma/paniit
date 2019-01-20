import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StatisticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

	isDisabled = true;
	servTime = 0;
	boolTime = 0;
	galleryType = 'daily'

	public lineChartData:Array<any> = [
	  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Avg. Service Time vs Time of the day'}
	];
	public lineChartLabels:Array<any> = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00'];

	public lineChartData1:Array<any> = [
	  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Avg. Waiting Time vs Time of the day'}
	];
	public lineChartLabels1:Array<any> = ['00', '04', '08', '12', '16', '20', '00'];

	public lineChartData2:Array<any> = [
	  {data: [28, 48, 40, 19, 86, 27, 90], label: 'Total Avg. Service time over the month'}
	];
	public lineChartLabels2:Array<any> = ['00', '04', '08', '12', '16', '20', '00'];

	public lineChartData3:Array<any> = [
	  {data: [18, 48, 77, 9, 100, 27, 40], label: 'Total Avg. Waiting time over the month'}
	];
	public lineChartLabels3:Array<any> = ['00', '04', '08', '12', '16', '20', '00'];

	public lineChartOptions:any = {
	  responsive: true
	};
	public lineChartColors:Array<any> = [
	  { // dark grey
	    backgroundColor: 'rgba(0,128,0,0.4)',
	    borderColor: 'rgba(0,128,0,1)',
	    pointBackgroundColor: 'rgba(0,128,0,1)',
	    pointBorderColor: '#fff',
	    pointHoverBackgroundColor: '#fff',
	    pointHoverBorderColor: 'rgba(0,128,0,1)'
	  }
	];
	public lineChartLegend:boolean = true;
	public lineChartType:string = 'line';

	// public randomize():void {
	//   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
	//   for (let i = 0; i < this.lineChartData.length; i++) {
	//     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
	//     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
	//       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
	//     }
	//   }
	//   this.lineChartData = _lineChartData;
	// }

	// events
	public chartClicked(e:any):void {
	  console.log(e);
	}

	public chartHovered(e:any):void {
	  console.log(e);
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');
  }

  play() {

  }

}
