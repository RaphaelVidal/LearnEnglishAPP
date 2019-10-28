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
  public varResposta: string = ''
  public rodada: number = 0
  public rodadaFrase: TipoFrase
  public varProgressoPainel: number = 0
  public varTentativas: number = 3

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }


  public atualizaRodada() {
    this.rodadaFrase = this.varFrase[this.rodada]
    this.varResposta = '' //limpa resposta da tela
  }

  public atualizaResposta(fraseDigitada: Event): void {
    this.varResposta = (<HTMLInputElement>fraseDigitada.target).value
  }


  public verificaResposta(): void {

    if (this.varResposta == this.rodadaFrase.frasePtBr) {
      alert('A tradução está correta!');
      this.varProgressoPainel = this.varProgressoPainel + (100 / this.varFrase.length)
      this.rodada++
      this.atualizaRodada()
    } else {
      alert('A tradução está errada!');
      this.varTentativas--
      console.log(this.varTentativas);
      if (this.varTentativas === -1) {
        alert('A suas chances acabaram')

      }
    }

  }
}
