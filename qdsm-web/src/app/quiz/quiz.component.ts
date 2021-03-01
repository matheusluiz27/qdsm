import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  questionIdToDisplay = 0

  nextQuestion() {
    this.questionIdToDisplay++;
  }

  backQuestion() {
    this.questionIdToDisplay--;
  }

  setAnswer(answer: number, id: number) {
    this.questions[id].answer = answer
    console.log(this.questions)
  }

  questions = [
    { answer: 0, question: "pergunta 1" },
    { answer: 0, question: "pergunta 2" },
    { answer: 0, question: "pergunta 3" },
    { answer: 0, question: "pergunta 4" },
    { answer: 0, question: "pergunta 5" }
  ]
}
