import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
    setTimeout(() => {
      this.objStyle['color'] = "red"
    }, 3000)
    
   }
  public user: string = "Larissa Bahia";

  public image: any = {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZy-Jkoohd7zZiIL5hvs1Zzt3nmhrOS7M_VrRFjCy8Odg3B4w12THbZFFTyV1KtT6zkQs&usqp=CAU",
  alt:"gatinho"
};

public clicar(): void {
  alert("clicou")
}
 
public objStyle: any = {'font-size':'20px',
'color':'black'

}


public sapinho: boolean = true;
public mudarSapinho(): void {
  this.sapinho = !this.sapinho;
}


public peixes: string[] = [
  "tubarão",
  "Nemo",
  "cavalo-marinho",
  "pirarucu"
];

public textoPipe: string = "Texto de exemplo";
public numberPipe: number = 344757;
public nowPipe = new Date();
public objPipe = {
  nome: "Laris",
  idade: 25,
  area: "tec"
}


}
