/**
 * Created by Tony on 2017/3/8.
 */
import { Component, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.services'
import { User } from './user'
import { GlobalVariable } from '../../const'

@Component({
    selector: '<ac-loginform></ac-loginform>',
    styleUrls: ['app.component.login.css'],
    templateUrl: 'app.component.login.html'
})
export class LoginForm implements AfterViewChecked {
    user = new User('','');
    submitted = false;
    result;
    showspinner;
    loginError = false;
    errorMessage;

    constructor(
        private router: Router,
        private loginService: LoginService
    ){}

     ngOnInit() {
      
   }


    onSubmit() {
        let body = '?username='+this.user.username+'&password='+encodeURI(this.user.password);
        this.showspinner=true;
        this.submitted = true;
        this.loginService.getAuth(body)
        .then(result => {
          this.result = result;
          let status = (result as any).status;
          if(status=="success"){
            
            this.router.navigate(['/Marketing']);
          }else{
            this.errorMessage = (result as any).errMsg;
            this.loginError = true;
          }
          this.showspinner=false;
      })
     }

      ngAfterViewChecked() {
       // this.loginError = false;
      }

    submitForm() {
            alert('点击已经被提交!');
        }


}
