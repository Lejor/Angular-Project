import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luta',
  templateUrl: './luta.component.html',
  styleUrls: ['./luta.component.css']
})
export class LutaComponent implements OnInit {


  public luta=['Mortal Kombat 12', 'Street Fighter V', 'The King of Fighters', 'Fatal Fury', 'Super Smash Bros for 3DS', 'Super Smash Bros Ultimate', 'Injustice', 'Injustice 2', 'Brawhalla', 'Dragon Ball Fighter Z'];

  constructor() { }

  ngOnInit(): void {
  }

}
