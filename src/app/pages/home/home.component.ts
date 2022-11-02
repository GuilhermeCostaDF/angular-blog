import { Component, OnInit } from '@angular/core';
import {dataFake, articleOthers} from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticiaPrincipal: any[] = dataFake;
  noticias: any[] = articleOthers ;

  constructor() { }

  ngOnInit(): void {
  }

}
