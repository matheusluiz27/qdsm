import { Injectable } from '@angular/core';

import { LocalStorageService } from 'src/app/local-storage.service'

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(localStorage: LocalStorageService) { }

  addPatient (patient: any) {debugger
    let patientsInCacheString = localStorage.getItem('patients')
    let patientsInCache = JSON.parse(patientsInCacheString || '{}')
    if (patientsInCacheString == null) {
      patientsInCache = []     
    }

    patientsInCache.push(patient)
    localStorage.setItem('patients', JSON.stringify(patientsInCache))
  }

  listPatients () {

  } 
}
