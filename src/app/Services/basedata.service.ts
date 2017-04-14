import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'

import { BaseDataBean } from '../Modals/basedata.bean'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseDataService {
    private basedataUrl = 'api/basedatas';
    private url = 'http://127.0.0.1:8080/salesplan/getMonthSalesplanByYear';
    //private headers = new Headers({'Content-Type': 'application/json'});
    private handleError(error:any): Promise<any>{
        console.error("BasedataService服务错误:",error);
        return Promise.reject(error.message || error);
    }

    constructor(private http:Http){
    }
    

    getBaseData(): Promise<BaseDataBean[]>{
        return this.http.get(this.url)
                    .toPromise()
                    .then(response => {
                        console.log(response.json())
                        return response.json() as BaseDataBean[]
                    }
                    )
                    .catch(this.handleError);
    }




}