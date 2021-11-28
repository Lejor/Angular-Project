import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-souls-like',
  templateUrl: './souls-like.component.html',
  styleUrls: ['./souls-like.component.css']
})
export class SoulsLikeComponent implements OnInit {

  constructor() { }

  public soulslike=['Dark Souls 3', 'Dark Souls 2', 'Dark Souls 1', 'BloodBorne', 'Sekiro: Shadow die Twice', 'Ashen', 'Demon Souls', 'Necropolis', 'Lords of the Fallen', 'Elden Ring']

  ngOnInit(): void {
  }

}
