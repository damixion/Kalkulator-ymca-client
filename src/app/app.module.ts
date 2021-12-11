import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculationsComponent } from './calculations/calculations.component';
import { ListResultComponent } from './list-result/list-result.component';
import { ResultPercentPipe } from './result-percent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculationsComponent,
    ListResultComponent,
    ResultPercentPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
