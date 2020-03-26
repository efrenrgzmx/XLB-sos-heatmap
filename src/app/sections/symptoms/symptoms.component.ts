import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackBarComponent} from '../../snack-bar/snack-bar.component';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  startTest = false;
  step = 0;
  questions = [
    '¿Tienes congestión y/o escurrimiento nasal y dolor de garganta?',
    '¿Tienes sensación de falta de aire de inicio brusco (en ausencia de cualquier otra patología que justifique este síntoma)?',
    '¿Tienes fiebre? (+37.7ºC)',
    '¿Tienes tos seca y persistente?',
    '¿Has tenido contacto estrecho con algún paciente positivo confirmado?',
    '¿Tienes sintomatología gastrointestinal?',
    '¿Cual es tú código postal?'
  ];
  answers = ['','','','','','','']

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onNext() {
    if(this.answers[this.step] === '') {
      this.openSnackBar();
      return;
    }

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

  onStartTest() {
    this.startTest = true;
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5 * 1000,
    });
  }
}
