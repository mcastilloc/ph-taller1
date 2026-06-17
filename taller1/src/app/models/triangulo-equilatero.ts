import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEquilatero extends FiguraGeometrica {

  constructor(private lado: number) {
    super();
  }

  calcularPerimetro(): number {
    return this.lado * 3;
  }
}
