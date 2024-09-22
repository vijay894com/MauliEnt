import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { billPdf } from './billPdf.service';
import { StorageServiceService } from '../../services/storage-service.service';
import { BillFormInput } from '../../interfaces/bill-form-input';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css', '../loginComp/login.component.css'],
})
export class BillFormComponent implements OnInit {
  constructor(
    private billPdf: billPdf,
    private storageService: StorageServiceService
  ) {}
  labels = [
    'Date',
    'Vehicle Info',
    'Challan No',
    'Start Time',
    'Stop Time',
    'Total Hrs',
  ];
  billFormInputs = new FormGroup({
    companyName: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
    ownerName: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
    address: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
    billDate: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
    billNo: new FormControl(
      { value: '', disabled: false },
      Validators.required
    ),
    rate: new FormControl({ value: '', disabled: false }, [
      Validators.required,
    ]),

    partyData: new FormControl(false, [Validators.required]),
    dayData: new FormArray([
      new FormControl(),
      new FormControl(),
      new FormControl(),
      new FormControl(),
      new FormControl(),
      new FormControl(),
    ]),
  });
  hasBeenDisabled = false; // Set flag to true to prevent further disablement

  ngOnInit(): void {
    this.billFormInputs.controls.partyData.valueChanges
      .pipe(debounceTime(100))
      .subscribe((partyData: any) => {
        console.log('party data:', partyData);
        if (partyData && !this.hasBeenDisabled) {
          for (const [key, control] of Object.entries(
            this.billFormInputs.controls
          )) {
            if (key !== 'dayData') this.billFormInputs.get(key)?.disable();
          }
          this.hasBeenDisabled = true;
        }
      });
  }
  everyDayData: any[] = [];
  addData() {
    console.log('date', this.billFormInputs.controls.dayData.controls);
    this.everyDayData.push([...this.billFormInputs.controls.dayData.value]);

    for (let i = 0; i < this.everyDayData.length; i++) {
      debugger;
      let [year, month, date] = this.everyDayData[i][0].split('-');
      if (year.length != 2) {
        this.everyDayData[i].shift();
        this.everyDayData[i].unshift(`${date}-${month}-${year}`);
      }
    }
    this.billFormInputs.controls.dayData.reset();
  }

  //formInputs for localStorage
  saveFormInputs() {
    let date= this.billFormInputs.controls.billDate.value!.split('-');
    let newDate=`${date[2]}-${date[1]}-${date[0]}`
    let formData: BillFormInput = {
      companyName: this.billFormInputs.controls.companyName.value!!,
      ownerName: this.billFormInputs.controls.ownerName.value!,
      address: this.billFormInputs.controls.address.value!,
      billDate:newDate,
      billNo: this.billFormInputs.controls.billNo.value!,
      rate: this.billFormInputs.controls.rate.value!,
    };
    this.storageService.billFormInputsStorage(JSON.stringify(formData));
  }
  //submit form
  submitForm() {
    this.billFormInputs.markAllAsTouched();
    console.log('form :', this.billFormInputs);
    if (this.billFormInputs.valid && this.billFormInputs.touched) {
      this.billFormInputs.controls.partyData.setValue(true);
      this.saveFormInputs();
    } else console.log('Please fill the details properly');
  }
  createPdf() {
    this.billPdf.createPdf(this.billFormInputs, this.everyDayData);
  }
}
