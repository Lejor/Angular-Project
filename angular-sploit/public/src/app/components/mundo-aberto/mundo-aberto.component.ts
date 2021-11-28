import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mundo-aberto',
  templateUrl: './mundo-aberto.component.html',
  styleUrls: ['./mundo-aberto.component.css']
})
export class MundoAbertoComponent implements OnInit {

  public mundoaberto=['The Legend of Zelda: Breath of the Wild', 'The Witcher 3', 'Immortals: Fenyx Rising', 'The Elder Scrolls V: Skyrim', 'Horizon: Zero Dawn', 'The Elder Scroll IV: Oblivion', 'Genshin Impact', 'Minecraft', 'GTA V', 'Red Dead Redemption 2'];


  constructor() { }

  ngOnInit(): void {
  }

}
