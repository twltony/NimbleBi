/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit,Input } from '@angular/core';
import { Http } from '@angular/http'
import { Router } from '@angular/router';

import { MarketingDatas } from '../../../Modals/marketing'

import { MarketingService } from '../marketing.services'


@Component({
    selector: 'market-monthsalesstatus',
    templateUrl: 'market-monthsalesstatus.component.html'

})
export class MarketMonthSalesStatus implements OnInit{
@Input() data: MarketingDatas[]
    constructor(
      private http: Http,
      private router: Router,
      private marketingService: MarketingService
    ){}

    ngOnInit() {
      this.marketingService.getMarketingMainData()
        .then(marketingDatas => {
          this.data = marketingDatas;
      })
  }

    navGoBack(): void{
      this.router.navigate(['../']);
    }

}
