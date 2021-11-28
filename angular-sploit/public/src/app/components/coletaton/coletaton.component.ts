import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coletaton',
  templateUrl: './coletaton.component.html',
  styleUrls: ['./coletaton.component.css']
})
export class ColetatonComponent implements OnInit {

  constructor() { }

  public coletaton=['Super Mario Galaxy', 'Super Mario Galaxy II', 'Super Mario Odyssey', 'Yooka-Layele', 'Banjo-Kazooie', 'A Hat in Time', 'Super Mario 3D Land', 'Super Mario 3D World', 'Donkey Kong', 'A Lenda do Herói', 'Super Mario 64']

  ngOnInit(): void {
  }

}
