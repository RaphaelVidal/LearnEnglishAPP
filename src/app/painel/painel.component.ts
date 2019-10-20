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
  constructor() { }

  ngOnInit() {
  }

  public atualizaResposta():void {
    console.log('teste');
  }
}
