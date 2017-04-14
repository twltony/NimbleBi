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
  selector: 'barchart',
  template: `
        <div style="min-width:280px;">
        <div #barchart></div>
        </div>
      `
})

export class Barchart implements AfterViewInit, OnDestroy {
  @ViewChild('barchart') public chartEl: ElementRef;

  private _chart: any;

  public ngAfterViewInit() {
    let opts: any = {
        title: {
        text: '2017年物资采购'
    },
    subtitle: {
        text: 'Source: <a ></a>'
    },
    xAxis: {
        categories: ['海丰项目', '敏捷城项目', '锦绣海湾城', '国际花城'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '单位 (万元)',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' 万元'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        shadow: true
    },
    series: [{
        name: '采购金额',
        data: [107, 31, 635, 203]
    }],
      credits: {
             enabled:false
        }
    };

    if (this.chartEl && this.chartEl.nativeElement) {
      opts.chart = {
        type: 'bar',
        renderTo: this.chartEl.nativeElement
      };

      this._chart = new Highcharts.Chart(opts);
    }
  }

  public ngOnDestroy() {
    this._chart.destroy();
  }
}
