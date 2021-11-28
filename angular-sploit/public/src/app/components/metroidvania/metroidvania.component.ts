import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metroidvania',
  templateUrl: './metroidvania.component.html',
  styleUrls: ['./metroidvania.component.css']
})
export class MetroidvaniaComponent implements OnInit {

  public metroidvania=['Hollow Knight', 'Metroid Dread', 'Castlevania Symphony of the Night', 'Kirby and the Amazing Mirror', 'Dead Cells', 'Ori and the Blind Forest', 'Ori and the Will of the Wisps', 'Dandara', 'Bloodstained: Ritual of the Night', 'Blasphemous'];

  constructor() { }

  ngOnInit(): void {
  }

}
