import { Component, OnInit } from '@angular/core';
import { TipoCoracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoCheio: String = '/assets/coracao_cheio.png'
  public coracaoVazio: String = '/assets/coracao_vazio.png'


  public vetorCoracao: TipoCoracao[] = [
    new TipoCoracao(true),
    new TipoCoracao(true),
    new TipoCoracao(true)
  ]; 
  

constructor() { console.log(this.vetorCoracao);}

ngOnInit() {
}

}
