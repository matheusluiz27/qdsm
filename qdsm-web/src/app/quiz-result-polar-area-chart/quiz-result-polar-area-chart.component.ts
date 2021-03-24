import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'quiz-result-polar-area-chart',
  templateUrl: './quiz-result-polar-area-chart.component.html',
  styleUrls: ['./quiz-result-polar-area-chart.component.css']
})
export class QuizResultPolarAreaChartComponent implements OnInit {

  public polarAreaChartLabels: Label[] = ['Disfunção no movimento do membro superior',
    'Disfunção no movimento do membro inferior, marcha e equilíbrio',
    'Disfunção na coordenação motora',
    'Disfunção no tônus muscular',
    'Disfunção somatossensorial',
    'Disfunção na práxis'];
  public polarAreaChartData: SingleDataSet = [100, 59, 20, 40, 10, 12];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  constructor() { }

  ngOnInit() {
  }

}
