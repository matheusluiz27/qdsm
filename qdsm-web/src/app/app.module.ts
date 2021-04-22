import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { PatientRecordComponent } from './patient-record/patient-record.component';
import { StartComponent } from './start/start.component';
import { PatientResultComponent } from './patient-result/patient-result.component';
import { QuizResultPolarAreaChartComponent } from './quiz-result-polar-area-chart/quiz-result-polar-area-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HeaderComponent,
    PatientRecordComponent,
    StartComponent,
    PatientResultComponent,
    QuizResultPolarAreaChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ChartsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
