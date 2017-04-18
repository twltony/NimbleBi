/**
 * Created by Tony on 2017/3/8.
 * 条形图控件
 */
import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
  ViewChild
} from '@angular/core';
import { MarketingDatas } from '../../Modals/marketing'
import { ColumnChartData } from '../../Modals/columnchart'

declare function require(arg:string): any;
const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'columnchart',
  template: `
        <div>
        <div #columnchart style=""></div>
        </div>
      `
})

export class Columnchart implements AfterViewInit, OnDestroy {
  @ViewChild('columnchart') public chartEl: ElementRef;
  @Input() 
  data: Object;
  constructor(private elRef: ElementRef){}

  ngOnInit() {

  }

  private _chart: any;

  public ngAfterViewInit() {
    let chart = new ColumnChartData;
    // let title =(this.data as any).chartTitle
    let title =(this.data as any)._chartTitle
    
    //系列
    // let series = (this.data as any).chartSeries;
    let series = (this.data as any)._series;
    //Y轴数据
    let categories = [];
    // let yDatas = (this.data as any).chartData
    // console.log((this.data as any).categories)
    // if(yDatas.categories==null)
    // for (var yData in yDatas){
    //   categories.push(yDatas[yData].vMm)
    // }
    categories=(this.data as any).categories

    //配置图形            
    let opts: any = {
      title: {
        text: title + 2015,
        style: { "fontSize": "14px" }
       // x: -20 //center
      },
      xAxis: {
        categories: categories
      },
      yAxis: {
        min: 0,
        title: {
            text: '金额（亿元）'
        }
      },
      plotOptions: {
        column: {
          dataLabels: {enabled: true},
          pointWidth: 15
        }
      },
      series: series,
      credits: {
             enabled:false
        }
    };

    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: 'column',
        renderTo: this.chartEl.nativeElement
      };

      this._chart = new Highcharts.Chart(opts);
    }
  }

  public ngOnDestroy() {
    this._chart.destroy();
  }
}
