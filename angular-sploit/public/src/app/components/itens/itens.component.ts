import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../../nav-item';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {

  @Input() itens: NavItem[] | undefined;
  @ViewChild('childMenu') public childMenu: any;

  

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
