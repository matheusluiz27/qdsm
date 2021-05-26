import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as XLSX from 'xlsx';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private router: Router, private patientsService: PatientsService) { }

  patients = []

  ngOnInit(): void {
    this.patients = this.patientsService.listPatients()
    console.log(this.patients)
  }

  goToPatientRecord() {
    this.router.navigate(['patient-record']);
  }

  toExportFileName(excelFileName: string): string {
    return `${excelFileName}_export_${new Date().getTime()}.xlsx`;
  }

  public exportToExcel(): void {debugger
    let dataToExport = this.prepareDataToExport()
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
    XLSX.writeFile(workbook, this.toExportFileName("questionario"));
  }

  prepareDataToExport(){
    let dataToExport: any[] = []
    this.patients.forEach(p => {debugger
      let data = {nome: p['nome'], sexo: p['sexo'], cod: p['cod'], idade: p['idade'], cpf: p['cpf'], hipoteseDiagnostica: p['hipoteseDiagnostica'], tempoDiagnostico: p['tempoDiagnostico'], implanteMetalicoCabeca: p['implanteMetalicoCabeca'], realizaTerapias: p['realizaTerapias'], queixaPrincipal: p['queixaPrincipal']}
      for(let i = 0; i < 26; i++) {
        if(p["quiz"] != undefined) {
          data[p["quiz"][i]["question"]] = p["quiz"][i]["answer"] 
        }
      }
      dataToExport.push(data)
    })
    return dataToExport
  }
}
