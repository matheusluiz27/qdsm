import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LocalStorageService} from 'src/app/local-storage.service'
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
    nome: "oi",
    sexo: "oi",
    cod: 123123,
    idade: 12,
    cpf: 12312312,
    hipoteseDiagnostica: "sdasdv asdfA",
    tempoDiagnostico: "ASDVSsv",
    implanteMetalicoCabeca: "asdvsa asdfa",
    realizaTerapias: "asdlkjl lkjlkj",
    queixaPrincipal: "asdnkj lknlaskdf"
  } 

  goToQuiz() {
    this.router.navigate(['quiz']);
    this.patientsService.addPatient(this.patient);
    console.log(this.patient)
  }
}
