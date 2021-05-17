import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public logout() {
    sessionStorage.removeItem('authToken');
  }

}
