import { Component, OnInit } from '@angular/core';
import { BancoDeFRASES } from "./frases-mock";
import { TipoFrase } from "../shared/frase.model";
import { $ } from 'protractor';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public varFrase:TipoFrase[] = BancoDeFRASES
  public varResposta: string
  constructor() { }

  ngOnInit() {
  }

  public atualizaResposta(fraseDigitada:Event):void {
    this.varResposta=(<HTMLInputElement>fraseDigitada.target).value
    //console.log(this.varResposta);
  }
}
