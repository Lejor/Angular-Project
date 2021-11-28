import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fps',
  templateUrl: './fps.component.html',
  styleUrls: ['./fps.component.css']
})
export class FpsComponent implements OnInit {

  public fps=['Counter Strike: Global Offensive', 'Call of Duty: World War II', 'Battlefield 2042', 'Overwatch', 'Valorant', 'Doom Eternal', 'Metroid Prime 3', '007 Goldeneye', 'Paladins', 'Call of Duty: Black Ops 2'];

  constructor() { }

  ngOnInit(): void {
  }

}
