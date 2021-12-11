import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable } from 'rxjs';
import { Measurement } from '../model/Measurement';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  addMeasurement(ms: Measurement)
  {
    this.http.post('http://localhost:8080/api/add',ms , {responseType: 'text'})
    .subscribe( mt => {
      this.snackBar.open("Wynik został zapisany", 'OK', {duration: 3000});
     },
     error => {
      this.snackBar.open("Operacja zapisu nie powiodła się ", 'OK', {duration: 3000});
      console.log(error);
     });
  }

  getAllMeasurement(): Observable<Array<Measurement>>
  {
    return this.http.get<Array<Measurement>>('http://localhost:8080/api/all');
  }


}
