import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { TipoCoracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativasComp: number;

  public vetorCoracao: TipoCoracao[] = [
    new TipoCoracao(true),
    new TipoCoracao(true),
    new TipoCoracao(true)
  ];


  constructor() { console.log(this.vetorCoracao); }

  ngOnChanges() {
    console.log(this.tentativasComp);
  }

  ngOnInit() {

  }

}
