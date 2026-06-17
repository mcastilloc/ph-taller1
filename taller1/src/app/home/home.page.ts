import { Component } from '@angular/core';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSelect, IonSelectOption} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonSelect,
    IonSelectOption,
    CirculoComponent,
    TrianguloComponent
  ]
})
export class HomePage {
 
  figura = '';
  
}
