import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultPolarAreaChartComponent } from './quiz-result-polar-area-chart.component';

describe('QuizResultPolarAreaChartComponent', () => {
  let component: QuizResultPolarAreaChartComponent;
  let fixture: ComponentFixture<QuizResultPolarAreaChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizResultPolarAreaChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizResultPolarAreaChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
