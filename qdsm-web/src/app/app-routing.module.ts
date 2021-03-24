import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRecordComponent } from './patient-record/patient-record.component';
import { QuizComponent } from './quiz/quiz.component';
import { StartComponent } from './start/start.component';
import { PatientResultComponent } from './patient-result/patient-result.component'

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'patient-record', component: PatientRecordComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'patient-result', component: PatientResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
