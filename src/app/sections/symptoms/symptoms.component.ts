import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  step = 0;
  questions = [
    '¿Tienes sensación de falta de aire de inicio brusco (en ausencia de cualquier otra patología que justifique este síntoma)?',
    '¿Tienes fiebre? (+37.7ºC)',
    '¿Tienes tos seca y persistente?',
    '¿Has tenido contacto estrecho con algún paciente positivo confirmado?',
    '¿Tienes sintomatología gastrointestinal?',
    '¿Cual es tú código postal?'
  ];
  answers = ['','','','','','']

  constructor() {}
  ngOnInit() {
  }

  onNext() {
    if (this.step === (this.questions.length - 1)) {
      console.log(this.answers);
      return;
    }
    this.step++;
  }

  onPrevious() {

    if (this.step === 0) {
      return;
    }
    this.step--;
  }

}
