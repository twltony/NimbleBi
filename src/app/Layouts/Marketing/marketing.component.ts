/**
 * Created by Tony on 2017/3/8.
 */
import {Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MarketingDatas } from '../../Modals/marketing'
import { BaseDataService  } from '../../Services/basedata.service'
import { MarketingService } from './marketing.services'
import { ColumnChartData } from '../../Modals/columnchart'
import { Series } from '../../Modals/series'


@Component({
    selector: 'marketing-subject',
    styleUrls:['./marketing.component.css'],
    templateUrl: 'marketing.component.html',
    providers:[]

})
export class Marketing implements OnInit{
 marketingDatas : MarketingDatas[];
 selectedYear;
 columnChartData = new ColumnChartData();

    constructor(
      private router: Router,
      private marketingService: MarketingService
    ) {
       
    }

    ngOnInit() {
      this.marketingService.getMarketingMainData()
        .then(marketingDatas => {
          this.marketingDatas = marketingDatas;
          let columndata = (marketingDatas as any).columnChart
          let series = (columndata as any).chartSeries
          let chartdatas =  (columndata as any).chartData as Object[]
          this.columnChartData.series = series
          this.columnChartData.chartTitle = (columndata as any).chartTitle
          for(let cat in chartdatas){
            this.columnChartData.categories.push((chartdatas[cat] as any).vMm);
          }
         
      })
   }
  
    navToDaySell(data): void{
      this.router.navigate(['/MarketDaySell']);
    }
     onSelectYear(year): void {
      this.selectedYear=year;
      console.log(year);
    } 

    columnChatData(){
      (this.marketingDatas as any).columnChart
    }

}
