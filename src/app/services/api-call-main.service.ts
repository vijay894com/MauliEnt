import { HttpClient } from '@angular/common/http';
import {
  ElementRef,
  Inject,
  inject,
  Injectable,
  Renderer2,
  RendererFactory2,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiCallMainService {
  private httpClient = inject(HttpClient);
  private renderer!: Renderer2;
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  domBody = document.querySelector('body')!;
  showLoaderDiv() {
    let loader = this.renderer.createElement('div');
    this.renderer.setAttribute(loader, 'class', 'loader');
    this.renderer.appendChild(this.domBody, loader);
  }

  hideLoaderDiv() {
    let loaderTag = this.domBody.getElementsByClassName('loader');
    this.renderer.removeChild(this.domBody, loaderTag[0]);
  }
  //get api
  callApiGetData(serv: string, doc?: any) {
    console.log('doc:', doc);
    //show loader
    this.showLoaderDiv();
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
          //to hide loader
          this.hideLoaderDiv();
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
