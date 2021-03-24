import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.css']
})
export class PatientRecordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToQuiz() {
    this.router.navigate(['quiz']);
  }
}
