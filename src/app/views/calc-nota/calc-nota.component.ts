import { Component} from '@angular/core';

@Component({
  selector: 'app-calc-nota',
  templateUrl: './calc-nota.component.html',
  styleUrls: ['./calc-nota.component.css']
})
export class CalcNotaComponent {

  public nota1: number = NaN;
  public nota2: number = NaN;
  public nota3: number = NaN;
  public media: number = 0.0;

  constructor() { }

  public calculaMedia(): void {
    const somaNotas: number = this.nota1 + this.nota2 + this.nota3;
    this.media = somaNotas / 3;
  }

}
