import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  titlu = "Componenta cu pizza";
  pizze = ['country', 'marguerita', 'quattro formaggi'];
  pizzeCuDetalii = [
    {
      nume : "Pizza Country",
      pret : 40.0
    },
    {
      nume : "Pizza Calzzone",
      pret: 33.3
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
