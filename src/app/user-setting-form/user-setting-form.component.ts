import { Component, OnInit } from '@angular/core';
import { UserSetting } from '../data/user-settings';

@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.scss'],
})
export class UserSettingFormComponent implements OnInit {
  originalUserSettings: UserSetting = {
    name: 'Shane',
    emailOffers: false,
    interfaceStyle: 'light',
    SubscriptionType: 'Annual',
    notes: 'Here is a note...',
  };

  userSettings: UserSetting = {... this.originalUserSettings};
  constructor() {}

  ngOnInit(): void {

  }
}
