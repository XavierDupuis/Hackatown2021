import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showFiller = false;
  title = "SaveMyPlant"
  constructor() { }

  ngOnInit(): void {
  }

}