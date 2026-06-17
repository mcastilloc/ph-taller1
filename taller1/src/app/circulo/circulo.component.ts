import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import {
  IonItem,
  IonInput,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText, IonImg } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Circulo } from '../models/circulo';


@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
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
export class CirculoComponent {

  radio = 0;
  resultado = 0;
  mostrarResultado = false;

  calcular() {

    const figura = new Circulo(this.radio);

    this.resultado = figura.calcularPerimetro();

    this.mostrarResultado = true;
  }
}
