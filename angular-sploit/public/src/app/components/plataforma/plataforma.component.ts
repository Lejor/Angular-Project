import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plataforma',
  templateUrl: './plataforma.component.html',
  styleUrls: ['./plataforma.component.css']
})
export class PlataformaComponent implements OnInit {

  constructor() { }

  public plataforma=['Super Mario Bros 2', 'Donkey Kong Country: Tropical Freeze', 'Kirby Star Allies', 'Spelunker', 'Yooka-Layle and the Impossible Lair', 'Super Mario World', 'New Super Mario Bros U', 'Celeste', 'Super Chicken Jumper', 'Gris']

  ngOnInit(): void {
  }

}
