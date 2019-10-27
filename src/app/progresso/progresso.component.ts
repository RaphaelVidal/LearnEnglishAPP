import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

 @Input() public varProgresso:number = 0 // recebe valor vindo do painel com a porcetagem de progresso
  constructor() { }

  ngOnInit() {
  }

}
