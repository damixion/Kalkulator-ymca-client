import { MeasurementService } from './../service/measurement.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Measurement } from '../model/Measurement';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent {

  dimensionsForm: FormGroup;
  userStatus = false;
  result = 0;
  resultWord = "";
  resultWordColor = "";
  dateNow: string;

  constructor(private formBuilder: FormBuilder,
    private measurementService: MeasurementService) {
    this.dimensionsForm =  this.formBuilder.group({
      name:['', {validators: [Validators.required, Validators.minLength(2)]}],
      sex:['', {validators: Validators.required}],
      weight:['', {validators: [Validators.required, Validators.max(500),  Validators.min(2)]}],
      waist:['', {validators: [Validators.required, Validators.max(400),  Validators.min(10)]}],
      age:['', {validators: [Validators.required, Validators.max(150),  Validators.min(1)]}],
    });
    this.dateNow = formatDate(new Date(), 'YYYY-MM-dd','en');

  }
  calc()
  {
    let factorSex = 0;
    this.dimensionsForm.get("sex")?.value == "M" ? factorSex = 98.42 : factorSex = 76.76;
    this.result = ((1.634 * this.dimensionsForm.get("waist")?.value) - (0.1804 * this.dimensionsForm.get("weight")?.value) - factorSex) /
     (2.2*this.dimensionsForm.get("weight")?.value )*100;
    this.setDescription();

    this.measurementService.addMeasurement(
      {id:0,
      name: this.dimensionsForm.get("name")?.value,
      sex: this.dimensionsForm.get("sex")?.value,
      weight: this.dimensionsForm.get("weight")?.value,
      waist: this.dimensionsForm.get("waist")?.value,
      age: this.dimensionsForm.get("age")?.value,
      result: this.result,
      date: this.dateNow,
      description: this.resultWord
      });
  }

  setDescription()
  {
    let age = this.dimensionsForm.get("age")?.value;
    if(this.dimensionsForm.get("sex")?.value == "M")
    {
      if(age < 39) {
       if(this.result <= 8) {
         this.resultWord = "Niedowaga"
       }
       else if (this.result <= 20) {
        this.resultWord = "Norma"
       }
       else if (this.result <= 25) {
        this.resultWord = "Nadwaga"
       }
       else {
        this.resultWord = "Otyłość"
       }
      }
      else if(age < 59) {
        if(this.result <= 10) {
          this.resultWord = "Niedowaga"
        }
        else if (this.result <= 22) {
         this.resultWord = "Norma"
        }
        else if (this.result <= 29) {
         this.resultWord = "Nadwaga"
        }
        else {
         this.resultWord = "Otyłość"
        }
      }
      else {
        if(this.result <= 12) {
          this.resultWord = "Niedowaga"
        }
        else if (this.result <= 25) {
         this.resultWord = "Norma"
        }
        else if (this.result <= 30) {
         this.resultWord = "Nadwaga"
        }
        else {
         this.resultWord = "Otyłość"
        }
      }
    }
    else
    {
      if(age < 39) {
       if(this.result <= 21) {
         this.resultWord = "Niedowaga"
       }
       else if (this.result <= 33) {
        this.resultWord = "Norma"
       }
       else if (this.result <= 39) {
        this.resultWord = "Nadwaga"
       }
       else {
        this.resultWord = "Otyłość"
       }
      }
      else if(age < 59) {
        if(this.result <= 23) {
          this.resultWord = "Niedowaga"
        }
        else if (this.result <= 35) {
         this.resultWord = "Norma"
        }
        else if (this.result <= 40) {
         this.resultWord = "Nadwaga"
        }
        else {
         this.resultWord = "Otyłość"
        }
      }
      else {
        if(this.result <= 24) {
          this.resultWord = "Niedowaga"
        }
        else if (this.result <= 37) {
         this.resultWord = "Norma"
        }
        else if (this.result <= 42) {
         this.resultWord = "Nadwaga"
        }
        else {
         this.resultWord = "Otyłość"
        }
      }
    }
  }

  getColor(result: string): string {
    switch (result) {
      case 'Nadwaga':
        return 'orange';
      case 'Otyłość':
        return 'red';
      case 'Niedowaga':
        return 'yellow';
      default:
        return 'green';
    }
}
}
