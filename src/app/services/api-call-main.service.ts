import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCallMainService {
  private httpClient = inject(HttpClient);
  constructor() {}
  //get api
  callApiGetData(serv: string) {
    return new Promise((resolve, reject) => {
      this.httpClient.get(serv + '/password.json').subscribe({
        next: (response) => {
          resolve(response);
        },
        error: (err) => {
          reject(err);
        },
        complete: () => {
          console.log('api call done');
        },
      });
    });
  }
  //post api
  callApiPost(postData: { fName: string; lName: string }, url: string) {
    //send http
    this.httpClient
      .post(url + '/posts.json', postData)
      .subscribe(() => console.log('post api'));
  }
}
