import { Component, OnInit } from '@angular/core';
import { BancoDeFRASES } from "./frases-mock";
import { TipoFrase } from "../shared/frase.model";
import { ProgressoComponent } from "../progresso/progresso.component";
import { $ } from 'protractor';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public varFrase: TipoFrase[] = BancoDeFRASES
  public varResposta: string
  public rodada: number = 0
  public rodadaFrase: TipoFrase
  public varProgresso: number = 0

  constructor() {
    this.rodadaFrase = this.varFrase[this.rodada]
    console.log(this.rodadaFrase);
  }

  ngOnInit() {
  }

  public atualizaResposta(fraseDigitada: Event): void {
    this.varResposta = (<HTMLInputElement>fraseDigitada.target).value
  }


  public verificaResposta(): void {
    // console.log('Verificar Resposta: ', this.varResposta);
    if (this.varResposta == this.rodadaFrase.frasePtBr) {
      alert('A tradução está correta!');
      this.varProgresso = this.varProgresso + (100 / this.varFrase.length)
      console.log(this.varProgresso);
      this.rodada++
      this.rodadaFrase = this.varFrase[this.rodada]
    } else {
      alert('A tradução está errada!');
    }

  }
}
