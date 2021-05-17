import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PatientsService } from '../patients.service';

@Component({
  selector: 'patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.css']
})
export class PatientRecordComponent implements OnInit {

  constructor(private router: Router, private patientsService: PatientsService) { }

  ngOnInit(): void {
  }

  patient: any = {
    nome: "",
    sexo: "",
    cod: "",
    idade: "",
    cpf: "",
    hipoteseDiagnostica: "",
    tempoDiagnostico: "",
    implanteMetalicoCabeca: "",
    realizaTerapias: "",
    queixaPrincipal: ""
  } 

  goToQuiz() {
    this.router.navigate(['quiz']);
    this.patientsService.addPatient(this.patient);
    console.log(this.patient)
  }
}
