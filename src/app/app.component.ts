import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public tipoEncerramento: string
 

  
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode == 13) {//presionar o enter para verificar
      this.reiniciar()
    }
  }

  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }

   public reiniciar() {
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }
}
