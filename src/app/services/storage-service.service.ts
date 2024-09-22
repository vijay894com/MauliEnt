import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageServiceService {
  constructor() {}

  //Store data in localStorage
  billFormInputsStorage(formInputs: string) {
    localStorage.setItem('formInputs', formInputs);
  }

  getFormInputsStorage(): string | null {
    return localStorage.getItem('formInputs');
  }
}
