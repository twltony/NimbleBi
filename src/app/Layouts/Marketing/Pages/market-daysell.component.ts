/**
 * Created by Tony on 2017/3/8.
 */
import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http'
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MarketingService } from '../marketing.services'


@Component({
  selector: 'market-daysell',
  styleUrls: ['market-daysell.component.css'],
  templateUrl: 'market-daysell.component.html'

})
export class MarketDaySell implements OnInit {
  datas: Object;
  constructor(
    private _Location: Location,
    private http: Http,
    private router: Router,
    private marketingService: MarketingService
  ) {

  }

  ngOnInit() {
    this.getMarket();
  }

  getMarket(): void {
    this.marketingService.getYearMarketData()
      .then(datas => {
        this.datas = datas;
      })
  }
  navGoBack(): void {
    this._Location.back();
  }
  janRate(data){
      let result = data.nJanMoney/data.nJanPlan;
      if(data.nJanPlan==0){result=0};
      return result;}
  febRate(data){
      let result = data.nFebMoney/data.nFebPlan
      if(data.nFebPlan==0){result=0};
      return result;}
  marRate(data){
      let result =data.nMarMoney/data.nMarPlan
      if(data.nMarPlan==0){result=0};
      return result;}
  aprRate(data){
      let result = data.nAprMoney/data.nAprPlan
      if(data.nAprPlan==0){result=0};
      return result;}
  mayRate(data){
      let result = data.nMayMoney/data.nMayPlan
      if(data.nMayPlan==0){result=0};
      return result;}
  juneRate(data){
      let result = data.nJuneMoney/data.nJunePlan
      if(data.nJunePlan==0){result=0};
      return result;}
  julyRate(data){
      let result = data.nJulyMoney/data.nJulyPlan
      if(data.nJulyPlan==0){result=0};
      return result;}
  augRate(data){
      let result = data.nAugMoney/data.nAugPlan
      if(data.nAugPlan==0){result=0};
      return result;}
  sepRate(data){
      let result = data.nSeptMoney/data.nSeptPlan
      if(data.nSeptPlan==0){result=0};
      return result;}
  octRate(data){
      let result = data.nOctMoney/data.nOctPlan
      if(data.nOctPlan==0){result=0};
      return result;}
  novRate(data){
      let result = data.nNovMoney/data.nNovPlan
      if(data.nNovPlan==0){result=0};
      return result;}
  decRate(data){
      let result = data.nDecMoney/data.nDecPlan
      if(data.nDecPlan==0){result=0};
      return result;}
  yearRate(data){
      let result = data.nYearMoney/data.nYearPlan
      if(data.nYearPlan==0){result=0};
      return result;}

}
