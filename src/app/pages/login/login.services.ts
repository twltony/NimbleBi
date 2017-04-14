import { Injectable } from '@angular/core'
import { Headers, Http, Response } from '@angular/http'
import { User } from './user'
import { GlobalVariable } from '../../const'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    private url = 'http://172.22.31.36:8080/login/loginauth';
    private handleError(error:any): Promise<any>{
        console.error("登陆服务错误:",error);
        return Promise.reject(error.message || error);
    }

    constructor(private http:Http){
    }
    

    getAuth(body): Promise<User[]>{
        return this.http.get(this.url+ body)
                    .toPromise()
                    .then(response => {
                        return response.json() as User[]
                    }
                    )
                    .catch(this.handleError);
    }
}