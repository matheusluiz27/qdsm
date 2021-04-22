import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';

@Component({
  selector: 'patient-result',
  templateUrl: './patient-result.component.html',
  styleUrls: ['./patient-result.component.css']
})
export class PatientResultComponent implements OnInit {

  datajson = [
    {
      paciente: 1,
      nome: "José",
      cpf: 202342342,
      idade: 19,
      questao_1: 1,
      questao_2: 1,
      questao_3: 1,
      questao_4: 1,
      questao_5: 1,
      questao_6: 1,
      questao_7: 1,
      questao_8: 1,
    },
    {
      paciente: 1,
      nome: "José",
      cpf: 202342342,
      idade: 19,
      questao_1: 1,
      questao_2: 1,
      questao_3: 1,
      questao_4: 1,
      questao_5: 1,
      questao_6: 1,
      questao_7: 1,
      questao_8: 1,
    },
    {
      paciente: 1,
      nome: "José",
      cpf: 202342342,
      idade: 19,
      questao_1: 1,
      questao_2: 1,
      questao_3: 1,
      questao_4: 1,
      questao_5: 1,
      questao_6: 1,
      questao_7: 1,
      questao_8: 1,
    },
    {
      paciente: 1,
      nome: "José",
      cpf: 202342342,
      idade: 19,
      questao_1: 1,
      questao_2: 1,
      questao_3: 1,
      questao_4: 1,
      questao_5: 1,
      questao_6: 1,
      questao_7: 1,
      questao_8: 1,
    },
    {
      paciente: 1,
      nome: "José",
      cpf: 202342342,
      idade: 19,
      questao_1: 1,
      questao_2: 1,
      questao_3: 1,
      questao_4: 1,
      questao_5: 1,
      questao_6: 1,
      questao_7: 1,
      questao_8: 1,
    },   
   ];

  constructor() { }

  ngOnInit(): void {
  }

  toExportFileName(excelFileName: string): string {
    return `${excelFileName}_export_${new Date().getTime()}.xlsx`;
  }

  public exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.datajson);
    const workbook: XLSX.WorkBook = {Sheets: {'data': worksheet}, SheetNames: ['data']};
    XLSX.writeFile(workbook, this.toExportFileName("oie"));
  }
}
