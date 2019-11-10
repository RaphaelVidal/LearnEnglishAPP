import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';
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
  @Output('encerrarJogo') public varEncerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 13) {//presionar o enter para verificar
      this.verificaResposta()
    }
  }

  
  public infoEnter() {
    alert('hover')
  }

  public atualizaRodada() {
    this.rodadaFrase = this.varFrase[this.rodada]
    this.varResposta = '' //limpa resposta da tela
  }

  public atualizaResposta(fraseDigitada: Event): void {
    this.varResposta = (<HTMLInputElement>fraseDigitada.target).value
  }


  public verificaResposta(): void {

    if (this.varResposta.trim() == this.rodadaFrase.frasePtBr.trim()) {
      alert('A tradução está correta!');
      this.varProgressoPainel = this.varProgressoPainel + (100 / this.varFrase.length)
      this.rodada++
      if (this.rodada === 4) {
        this.varEncerrarJogo.emit('vitoria')
      }


      this.atualizaRodada()


    } else {
      //alert('A tradução está errada!');
      this.varTentativas--

      if (this.varTentativas === -1) {

        this.varEncerrarJogo.emit('derrota')

      }
    }

  }
}
