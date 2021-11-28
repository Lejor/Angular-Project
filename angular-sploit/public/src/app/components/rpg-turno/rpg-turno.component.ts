import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpg-turno',
  templateUrl: './rpg-turno.component.html',
  styleUrls: ['./rpg-turno.component.css']
})
export class RpgTurnoComponent implements OnInit {


  public rpgturno =['Kings Bounty: The Legend', 'The Banner Saga', 'Breath of Fire', 'Chrono Trigger', 'Final Fantasy', 'Darkest Dungeon', 'Ruined King', 'Raid: Shadow Legends', 'Baldur`s Gate', 'Dragon Quest VIII']

  constructor() { }

  ngOnInit(): void {
  }

}
