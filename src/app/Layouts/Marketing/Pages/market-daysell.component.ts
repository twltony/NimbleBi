/**
 * Created by Tony on 2017/3/8.
 */
import { Component, OnInit, Input ,AfterViewChecked } from '@angular/core';
import { Http } from '@angular/http'
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MarketingService } from '../marketing.services'
import { ColumnChartData } from '../../../Modals/columnchart'
import { Series } from '../../../Modals/series'

let salesColumnChartData=  new ColumnChartData();
@Component({
  selector: 'market-daysell',
  styleUrls: ['market-daysell.component.css'],
  templateUrl: 'market-daysell.component.html'

})

export class MarketDaySell implements OnInit,AfterViewChecked {
  datas: Object[];
  ser = new Series;
  sera = new Object;
  isDataAvailable =false;
  columnChartData= salesColumnChartData;
  constructor(
    private _Location: Location,
    private http: Http,
    private router: Router,
    private marketingService: MarketingService
  ) {
   
  }

  ngOnInit() {
    this.getMarket();
    salesColumnChartData.chartTitle="年集团销售情况统计表";
  }
  ngAfterViewChecked(){

  }

  getMarket(): void {
    this.marketingService.getYearMarketData()
      .then(datas => {
        this.datas = datas;
        let salesStatus = (this.datas as any).yearList;
        let sers = []
        let serdata = []
        this.ser.name = "1";
        for(status in salesStatus){
            this.columnChartData.categories.push(salesStatus[status].vBuname)
            var obj = salesStatus[status].nYearMoney/salesStatus[status].nYearPlan*100 
           if(salesStatus[status].nYearPlan != 0 ){
            serdata.push(Math.round(obj));
           }else{
             serdata.push(0)  
           }
            
          
        }
        //this.ser.data = serdata;
        (this.sera as any).data = serdata;
        (this.sera as any).name = "销售区域";
        sers.push(this.sera);
        this.columnChartData.series = sers;
        this.isDataAvailable = true;
      })
  }
  navGoBack(): void {
    this._Location.back();
  }
  janRate(data){
      let result = data.nJanMoney/data.nJanPlan*100;
      result = Math.round(result);
      if(data.nJanPlan==0){result=0};
      return String(result+"%");}
  febRate(data){
      let result = data.nFebMoney/data.nFebPlan*100;
      result = Math.round(result);
      if(data.nFebPlan==0){result=0};
      return String(result+"%");}
  marRate(data){
      let result =data.nMarMoney/data.nMarPlan*100;
       result = Math.round(result);
      if(data.nMarPlan==0){result=0};
      return String(result+"%");}
  aprRate(data){
      let result = data.nAprMoney/data.nAprPlan*100;
       result = Math.round(result);
      if(data.nAprPlan==0){result=0};
      return String(result+"%");}
  mayRate(data){
      let result = data.nMayMoney/data.nMayPlan*100;
       result = Math.round(result);
      if(data.nMayPlan==0){result=0};
      return String(result+"%");}
  juneRate(data){
      let result = data.nJuneMoney/data.nJunePlan*100;
       result = Math.round(result);
      if(data.nJunePlan==0){result=0};
      return String(result+"%");}
  julyRate(data){
      let result = data.nJulyMoney/data.nJulyPlan*100;
       result = Math.round(result);
      if(data.nJulyPlan==0){result=0};
      return String(result+"%");}
  augRate(data){
      let result = data.nAugMoney/data.nAugPlan*100;
       result = Math.round(result);
      if(data.nAugPlan==0){result=0};
      return String(result+"%");}
  septRate(data){
      let result = data.nSeptMoney/data.nSeptPlan*100;
      result = Math.round(result);
      if(data.nSeptPlan==0){result=0};
      return String(result+"%");}
  octRate(data){
      let result = data.nOctMoney/data.nOctPlan*100;
       result = Math.round(result);
      if(data.nOctPlan==0){result=0};
      return String(result+"%");}
  novRate(data){
      let result = data.nNovMoney/data.nNovPlan*100;
       result = Math.round(result);
      if(data.nNovPlan==0){result=0};
      return String(result+"%");}
  decRate(data){
      let result = data.nDecMoney/data.nDecPlan*100;
       result = Math.round(result);
      if(data.nDecPlan==0){result=0};
      return String(result+"%");}
  yearRate(data){
      let result = data.nYearMoney/data.nYearPlan*100
      result = Math.round(result);
      if(data.nYearPlan==0){result=0};
      salesColumnChartData.categories.push(data.vBuname);
     // (this.columnChartData.categories as any).push(data.vBuname);
     // this.series.push(result);
      return String(result+"%");}
}
