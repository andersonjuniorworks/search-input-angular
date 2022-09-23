import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  arr: any[] = [
    { id: 1, nome: 'Maria do Carmo' },
    { id: 2, nome: 'Alice Alves de Macedo' },
    { id: 3, nome: 'Rafael Lima Cavalcante' },
    { id: 4, nome: 'Lucas Castro de Macedo' },
    { id: 5, nome: 'Marlucia Lima Damasceno' },
    { id: 6, nome: 'Icaro Caio de Souza' },
    { id: 7, nome: 'Jurandir Lima de Macedo' },
    { id: 8, nome: 'Lucas Prado de Souza' },
    { id: 9, nome: 'Aline Lima dos Santos' },
    { id: 10, nome: 'Alefe da Costa Marques' },
    { id: 11, nome: 'Mikalatéia de Souza Azevedo' },
    { id: 12, nome: 'Olonéia Lima Duarte' },
    { id: 13, nome: 'Hemanoteu Godah dos Santos' },
    { id: 14, nome: 'Luciana Ximenes Marinho' },
    { id: 15, nome: 'Pedro Iuru da Silva' },
    { id: 16, nome: 'Milena da Silva Sauro' },
  ];

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      selected: null,
    });
  }
}
