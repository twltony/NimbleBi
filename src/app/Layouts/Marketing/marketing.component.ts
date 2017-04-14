/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MarketingDatas } from '../../Modals/marketing'
import { BaseDataService  } from '../../Services/basedata.service'
import { MarketingService } from './marketing.services'


@Component({
    selector: 'marketing-subject',
    styleUrls:['./marketing.component.css'],
    templateUrl: 'marketing.component.html',
    providers:[]

})
export class Marketing implements OnInit{
 marketingDatas : MarketingDatas[];
 selectedYear;

    constructor(
      private router: Router,
      private marketingService: MarketingService
    ) {
       
    }

    ngOnInit() {
      this.marketingService.getMarketingMainData()
        .then(marketingDatas => {
          this.marketingDatas = marketingDatas;
      })
   }
  
    navToDaySell(data): void{
      this.router.navigate(['/MarketDaySell']);
    }
     onSelectYear(year): void {
      this.selectedYear=year;
      console.log(year);
    } 

}
