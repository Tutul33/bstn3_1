import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public _userAuthenticationUrl:string='users/userAuthentication';
  public _userCreationUrl:string='users/userCreate';
  public username:string='';
  public password: string='';
  public res:any;
  public islogin:boolean=true;
  public Message:string='';
  constructor(private _dataService:DataService,public _router:Router) { }

  ngOnInit(): void {
  }
 
 
  UserAuthentication(){
    if(this.username==''){
      this.Message="Please enter user name.";
      return;
    }
    if(this.password==''){
      this.Message="Please enter password.";
      return;
    }
  var param = [{ Username: this.username,password:this.password }];
        
  this._dataService.post(this._userAuthenticationUrl, param)
            .subscribe(response => {
                this.res = response;             
                if (this.res.resdata.resstate) {
                  localStorage.setItem('userId', this.res.resdata.userId);
                  localStorage.setItem('username', this.res.resdata.username);
                  
                  this._router.navigate(['/feedback']);
                } else {
                          }
            }, error => {
                console.log(error);
            });

}
UserCreate(){
  if(this.username==''){
    this.Message="Please enter user name.";
    return;
  }
  if(this.password==''){
    this.Message="Please enter password.";
    return;
  }
  var param = [{ Username: this.username,password:this.password }];
        
  this._dataService.post(this._userCreationUrl, param)
            .subscribe(response => {
                this.res = response;             
                if (this.res.resdata.resstate) {
                
                } else {
                          }
            }, error => {
                console.log(error);
            });

}


}
