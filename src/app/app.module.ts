//根组件
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';

//路由
import { RouterModule, Routes } from '@angular/router'
import { AppRoutingModule } from './app-routing'

//页面组件
import { AppComponent } from './app.component';
import { LoginForm } from "./pages/login/app.component.login";
import { Marketing } from "./Layouts/Marketing/marketing.component";
import { MarketDaySell } from "./Layouts/Marketing/Pages/market-daysell.component";
import { Costing } from "./Layouts/Costing/costing.component";
import { Tendering } from "./Layouts/Tendering/tendering.component";

// 图标组件
import { Grid } from './pages/Grids/grid.component'
import { Linechart } from "./components/Charts/linechart.component";
import { Columnchart } from "./components/Charts/columnchart.component";
import { Piechart } from "./components/Charts/piechart.component"
import { Barchart } from "./components/Charts/barchart.component"

//pipes
import {RoundPipe} from "./Pipes/round.pipe"

//虚拟服务（生产环境去除）
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './Services/in-memory-data.service';

declare function require(arg:string): any;

const Highcharts = require('highcharts/highcharts.src');

@NgModule({
  declarations: [
    AppComponent,
    Marketing,
    Costing,
    Tendering,

    MarketDaySell,

    Columnchart,
    Linechart,
    Piechart,
    Barchart,
    Grid,
    LoginForm,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    FormsModule,
    HttpModule,
    DxDataGridModule, DxTemplateModule,
   // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
