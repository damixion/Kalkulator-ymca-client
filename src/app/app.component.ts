import { Component, ViewChild } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ListResultComponent } from './list-result/list-result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kalkulator-YMCA';
  @ViewChild(ListResultComponent)
  private listResultComponent!: ListResultComponent;

  onTabChanged(event: MatTabChangeEvent)
  {
    if(event.index == 1)
    {
        this.listResultComponent.getAllMeasurement();
    }

  }
}
