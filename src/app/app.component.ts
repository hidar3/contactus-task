import { Component } from '@angular/core';
import {MdSnackBar,MdSnackBarConfig} from '@angular/material';

import { detail } from './app.model';
import { AppService } from './app.service';

import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [AppService]
})

export class AppComponent {
  
  userForm: any;
  model = new detail();
  message: string = 'Thank You.';
  actionButtonLabel: string = 'Retry';
  action: boolean = false;
  setAutoHide: boolean = true;
  autoHide: number = 5000;
  addExtraClass: boolean = false;
  constructor(public snackBar: MdSnackBar,public _appService: AppService,) {}
  
  onSubmit(data,formEle){
    console.log(data);
    var config = new MdSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = this.addExtraClass ? ['submitted'] : null;

    this._appService.upload(data).map(x=>x).subscribe(
      data => {
        this.model={};
        formEle.reset();
      },
      err => {
        console.log(err);
        this.snackBar.open('Error, Submit Failed', this.action && this.actionButtonLabel, config);
      },
      () => {
        this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
      });
    
  }
  
}
