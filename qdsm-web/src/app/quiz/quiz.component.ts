import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router: Router, private patientsService: PatientsService) { }

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

  endQuiz(){debugger
    let patients = this.patientsService.listPatients()
    let patient = patients[patients.length - 1]
    patient["quiz"] = this.questions
    patients[patients.length - 1] = patient
    this.patientsService.updatePatients(patients)
    this.router.navigate(['/']);
  }

  questions = [
    { answer: 0, dimension: "Disfunção no movimento do membro superior", question: "É fácil mover seu braço/mão?" },
    { answer: 0, dimension: "Disfunção no tônus muscular", question: "Durante uma atividade, você sente que seu braço e/ou dedos dobram sem você controlar?" },
    { answer: 0, dimension: "Disfunção no movimento do membro superior", question: "Você consegue esticar o braço e abrir a mão com facilidade?" },
    { answer: 0, dimension: "Disfunção no movimento do membro superior", question: "Você consegue colocar a palma da mão para cima rapidamente?" },
    { answer: 0, dimension: "Disfunção somatossensorial", question: "Você sente uma dor espalhada (em vários locais)?" },
    { answer: 0, dimension: "Disfunção no movimento do membro superior", question: "Você consegue levar a sua mão até a boca?" },
    { answer: 0, dimension: "Disfunção no movimento do membro inferior, marcha e equilíbrio", question: "Sentado você consegue olhar para alguém que está atrás de você, sem usar o apoio das mãos? OBS: considere que você está desencostado da cadeira" },
    { answer: 0, dimension: "Disfunção no movimento do membro inferior, marcha e equilíbrio", question: "Você sente suas pernas fracas?" },
    { answer: 0, dimension: "Disfunção no movimento do membro inferior, marcha e equilíbrio", question: "Você consegue se manter sentado sem apoio? " },
    { answer: 0, dimension: "Disfunção no movimento do membro inferior, marcha e equilíbrio", question: "Se movimentando, você sente que é difícil manter o equilíbrio?" },
    { answer: 0, dimension: "Disfunção no movimento do membro inferior, marcha e equilíbrio", question: "Parado, é fácil para você manter o equilíbrio?" },
    { answer: 0, dimension: "Disfunção na coordenação motora", question: "Você consegue levar o seu dedo indicador precisamente até a ponta do seu nariz?" },
    { answer: 0, dimension: "Disfunção na coordenação motora", question: "Você consegue alternar rapidamente os movimentos da sua mão da seguinte maneira: palma da mão para cima, palma da mão para baixo?" },
    { answer: 0, dimension: "Disfunção na coordenação motora", question: "Ao lançar um objeto para cima você consegue pegá-lo sem deixar cair no chão?" },
    { answer: 0, dimension: "Disfunção na coordenação motora", question: "Você consegue alcançar precisamente um objeto colocado na sua frente?" },
    { answer: 0, dimension: "Disfunção no tônus muscular", question: "Durante uma atividade, você sente que seu braço e/ou dedos dobram sem você controlar?" },
    { answer: 0, dimension: "Disfunção no tônus muscular", question: "Deitado, quando você muda de posição, sua perna estica sozinha?" },
    { answer: 0, dimension: "Disfunção no tônus muscular", question: "Você acredita que ficaria mais fácil caminhar com alguém te ajudando a ter ritmo (por exemplo, batendo palmas)?" },
    { answer: 0, dimension: "Disfunção no tônus muscular", question: "Você nota que tem movimentos involuntários rápidos?" },
    { answer: 0, dimension: "Disfunção somatossensorial", question: "Você sente uma dor espalhada (em vários locais)?" },
    { answer: 0, dimension: "Disfunção somatossensorial", question: "Você sente uma dor bem localizada/delimitada?" },
    { answer: 0, dimension: "Disfunção somatossensorial", question: "Você tem dificuldade de sentir quando alguém toca no seu rosto ou braços?" },
    { answer: 0, dimension: "Disfunção somatossensorial", question: "Você tem dificuldade de identificar um estímulo quente ou frio sobre a sua pele?" },
    { answer: 0, dimension: "Disfunção somatossensorial", question: "De olhos fechados, se eu colocasse o seu braço em uma posição, você conseguiria posicionar o outro da mesma forma?" },
    { answer: 0, dimension: "Disfunção somatossensorial", question: "Você consegue sentir com facilidade quando alguém toca no seu tronco ou nas suas pernas?" },
    { answer: 0, dimension: "Disfunção na práxis", question: "Já aconteceu de você trocar a ordem das etapas de uma atividade?" },
    { answer: 0, dimension: "Disfunção na práxis", question: "Quando solicitado, já aconteceu de você não conseguir realizar um movimento que você sabe é capaz?" },
  ]
}
