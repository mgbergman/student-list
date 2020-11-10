import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus : string[] = [
    "Home", "About", "Help", "Go Away"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
