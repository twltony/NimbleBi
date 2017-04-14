/**
 * Created by Tony on 2017/3/8.
 * 条形图控件
 */
import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import 'highcharts/adapters/standalone-framework.src';

declare function require(arg:string): any;
const Highcharts = require('highcharts/highcharts.src');

@Component({
  selector: 'linechart',
  template: `
        <div>
        <div #chart></div>
        </div>
      `
})

export class Linechart implements AfterViewInit, OnDestroy {
  @ViewChild('chart') public chartEl: ElementRef;

  private _chart: any;

  public ngAfterViewInit() {
    let opts: any = {
      title: {
        text: '销售金额',
        x: -20 //center
      },
      xAxis: {
        categories: ['01月', '02月', '03月', '04月', '05月', '06月',
          '07月', '08月', '09月', '10月', '11月', '12月']
      },
      yAxis: {
        min: 0,
        title: {
            text: '金额（亿元）'
        }
      },
      series: [{
        name: '销售金额',
        data: [
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,
          26.5, 23.3, 18.3, 13.9, 9.6
        ]
      }],
      credits: {
             enabled:false
        }
    };

    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: 'line',
        renderTo: this.chartEl.nativeElement
      };

      this._chart = new Highcharts.Chart(opts);
    }
  }

  public ngOnDestroy() {
    this._chart.destroy();
  }
}
