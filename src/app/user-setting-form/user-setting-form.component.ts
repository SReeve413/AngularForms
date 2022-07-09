import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
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

  constructor() {}

  ngOnInit(): void {

  }

  onBlur(field: NgModel){
    console.log('in onBlur:', field.valid)
  }
  onSubmit(form: NgForm){
    console.log('in onSubmit', form.valid)
  }
}
