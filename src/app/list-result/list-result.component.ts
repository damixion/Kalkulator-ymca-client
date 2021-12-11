import { MeasurementService } from './../service/measurement.service';
import { Component, OnInit } from '@angular/core';
import { Measurement } from '../model/Measurement';

@Component({
  selector: 'app-list-result',
  templateUrl: './list-result.component.html',
  styleUrls: ['./list-result.component.scss']
})
export class ListResultComponent {

 // displayedColumns = ['position', 'name', 'weight', 'symbol'];
  displayedColumns = ['id', 'name', 'age','weight', 'waist','date', 'result', 'description'];
  dataSources: Array<Measurement> = [];

  constructor(private http: MeasurementService) {}

  getAllMeasurement()
  {
   this.http.getAllMeasurement().subscribe(mt =>{
    this.dataSources = mt;
   });
  }
}

