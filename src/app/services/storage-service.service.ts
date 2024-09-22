import { Injectable } from '@angular/core';
import { BillFormInput } from '../interfaces/bill-form-input';

@Injectable({
  providedIn: 'root',
})
export class StorageServiceService {
  constructor() {}

  //Store data in localStorage
  billFormInputsStorage(formInputs: string) {
    localStorage.setItem('formInputs', formInputs);
  }

  getFormInputsStorage(): any {
    return localStorage.getItem('formInputs');
  }
}
