import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import { MarketingDatas } from '../../Modals/marketing'
import { GlobalVariable } from '../../const'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MarketingService {
    private marketUrl = GlobalVariable.ServerAddress+'salesplan/getMonthSalesplanByYear';
    private marketYearUrl = GlobalVariable.ServerAddress+'salesplan/getMarketYear';
    private MarketMainData;
    private handleError(error:any): Promise<any>{
        console.error("MarketingService服务错误:",error);
        return Promise.reject(error.message || error);
    }

    constructor(private http:Http){
    }
    
    //首页数据
    getMarketingMainData(): Promise<MarketingDatas[]>{
        return this.http.get(this.marketUrl)
                    .toPromise()
                    .then(response => {
                        this.MarketMainData = response.json();
                        return response.json() as MarketingDatas[]
                    }
                    )
                    .catch(this.handleError);
    }

    getSalesStatusData():  Promise<MarketingDatas[]>{
        return this.http.get(this.marketUrl)
                    .toPromise()
                    .then(response => {
                        return response.json() as MarketingDatas[]
                    }
                    )
                    .catch(this.handleError);
    }
    //年度销售情况表数据
    getYearMarketData():  Promise<MarketingDatas[]>{
        return this.http.get(this.marketYearUrl)
                    .toPromise()
                    .then(response => {
                        return response.json() as MarketingDatas[]
                    }
                    )
                    .catch(this.handleError);
    }

}