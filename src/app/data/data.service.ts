import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSetting } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]>{
    return of(['Monthly', 'Annual', 'Lifetime'])
  }


  postUserSettingForm(userSettings: UserSetting): Observable<any>{
    // return of(userSettings);
    return this.http.post('https://putsreq.com/777eEFYHCMK1lk880pGT', userSettings);
  }


}
