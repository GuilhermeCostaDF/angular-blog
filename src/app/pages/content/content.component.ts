import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = 'https://blog.geekhunter.com.br/wp-content/uploads/2019/07/angular8-min-1.jpg'
  contentTitle: string = 'Meu artigo'
  contentDescription: string = 'Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Paisis, filhis, espiritis santis. Quem num gosta di mé, boa gentis num é.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. A ordem dos tratores não altera o pão duris.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Per aumento de cachacis, eu reclamis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.'

  constructor() { }

  ngOnInit(): void {
  }

}
