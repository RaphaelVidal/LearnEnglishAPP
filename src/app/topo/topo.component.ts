import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  public Versao:string = "0.1"
  public Titulo: String = 'Aprendendo Inglês'
}
