import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonItem, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, 
  IonCardTitle, IonText, IonImg } from '@ionic/angular/standalone';
import { TrianguloEscaleno } from '../models/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
    imports: [IonImg, 
    CommonModule,
    FormsModule,
    IonItem,
    IonInput,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonText
  ]
})
export class TrianguloComponent  {

  ladoa = 0;
  ladob = 0;
  ladoc = 0;

  resultado = 0;
  mostrarResultado = false;

  calcular() {

    const figura = new TrianguloEscaleno(
      this.ladoa,
      this.ladob,
      this.ladoc
    );

    this.resultado = figura.calcularPerimetro();

    this.mostrarResultado = true;
  }

}
