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


  constructor() { }

  ngOnChanges() {
    
    if (this.tentativasComp !== this.vetorCoracao.length) {
      let index:number = this.vetorCoracao.length - this.tentativasComp
      this.vetorCoracao[index - 1].cheio = false
    }
  }

  ngOnInit() {

  }

}
