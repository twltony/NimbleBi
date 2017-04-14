/**
 * Created by Tony on 2017/3/8.
 * 饼图控件
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
import 'highcharts/adapters/standalone-framework.src';

declare function require(arg:string): any;
const Highcharts = require('highcharts/highcharts.src');

@Component({
  selector: 'piechart',
  template: `
        <div>
        <div #piechart style=""></div>
        </div>
      `
})

export class Piechart implements AfterViewInit, OnDestroy {
  @ViewChild('piechart') public chartEl: ElementRef;
  @Input() data: MarketingDatas[];

  private _chart: any;

  public ngAfterViewInit() {
    let title =(this.data as any).chartTitle
    //系列
    let series = (this.data as any).chartSeries;
    let seriesName = (this.data as any).chartSeriesName; // 单位
    let opts: any = {
        title: {
            text: title
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
    plotOptions: {
        pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        chart:{
             height:10000
        },
        legend:{
            align:'center',
            verticalAlign:'center',
            x:0,
            y:30
        },
        series: [{
            name: seriesName,
            colorByPoint: true,
            data: [{
            "name": "洋房",
            "y": 119165.4004,
            "data": null
        }, {
            "name": "商铺",
            "y": 262897.923,
            "data": null
        }, {
            "name": "公寓",
            "y": 424953.8342
        }, {
            "name": "车位",
            "y": 63950.0892
        }, {
            "name": "别墅",
            "y": 59450.7303
        }]
        }],
      credits: {
             enabled:false
        }
    };

    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: 'pie',
        renderTo: this.chartEl.nativeElement
      };

      this._chart = new Highcharts.Chart(opts);
    }
  }

  public ngOnDestroy() {
    this._chart.destroy();
  }
}
