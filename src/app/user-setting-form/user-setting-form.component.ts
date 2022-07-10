import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSetting } from '../data/user-settings';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.scss'],
})
export class UserSettingFormComponent implements OnInit {
  originalUserSettings: UserSetting = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    SubscriptionType: null,
    notes: null,
  };

  userSettings: UserSetting = {... this.originalUserSettings};
  postError = false;
  postErrorMessage = '';

  subTypes : Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
   this.subTypes = this.dataService.getSubscriptionTypes();
  }

  onBlur(field: NgModel){
    console.log('in onBlur:', field.valid)
  }

  onHttpError( errorResponse: any){
    console.log('error: ', errorResponse)
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;

  }

  onSubmit(form: NgForm){
    console.log('in onSubmit', form.valid)
    if(form.valid){
      this.dataService.postUserSettingForm(this.userSettings)
      .subscribe(
        result => {
          console.log('success: ', result)
        },
        error => {
          this.onHttpError(error);
        }
      )
    }else {
      this.postError = true;
      this.postErrorMessage = 'Please fix above errors';
    }

  }
}
