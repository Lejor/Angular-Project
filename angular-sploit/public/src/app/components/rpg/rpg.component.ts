import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RpgComponent implements OnInit {

  constructor() { }

  public rpg=['World of Warcraft', 'Terraria', 'Ragnarök', 'Dungeons & Dragons', 'Diablo III', 'Path of Exile', 'Baldurs Gate II', 'Undertale', 'Cyberpunk 2077', 'Dragon Age: Origins']

  ngOnInit(): void {
  }

}
