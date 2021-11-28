import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpg-tatico',
  templateUrl: './rpg-tatico.component.html',
  styleUrls: ['./rpg-tatico.component.css']
})
export class RpgTaticoComponent implements OnInit {

  public rpgtatico=['Fallout 2', 'Phantom Brave', 'Fire Emblem', 'Final Fantasy Tatics', 'Fire Emblem: Three Houses', 'Vandal Hearts', 'Tactics Ogre', 'Bomberman Wars', 'La Pucelle: Tactics', 'Kartia'];

  constructor() { }

  ngOnInit(): void {
  }

}
