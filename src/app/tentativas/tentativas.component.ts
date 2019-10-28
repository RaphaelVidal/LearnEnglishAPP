import { Component, OnInit, Input } from '@angular/core';
import { TipoCoracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  @Input() public tentativasComp: number;
  
  public vetorCoracao: TipoCoracao[] = [
    new TipoCoracao(true),
    new TipoCoracao(true),
    new TipoCoracao(true)
  ];


  constructor() { console.log(this.vetorCoracao);}

  ngOnInit() {
    console.log(this.tentativasComp);
  }

}
