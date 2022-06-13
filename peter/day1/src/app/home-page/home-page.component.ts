import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  destinationName1: string ="Dreamlocation 1";
  destinationPrice1: number = 1500;
  destinationNights1: number =3;
  destinationCity1: string ="Berlin";
  destinationName2: string ="Dreamlocation 2";
  destinationPrice2: number = 2500;
  destinationNights2: number =5;
  destinationCity2: string ="Frankfurt";
  destinationName3: string ="Dreamlocation 3 ";
  destinationPrice3: number = 3800;
  destinationNights3: number =13;
  destinationCity3: string ="Salzburg";
  destinationName4: string ="Dreamlocation 4";
  destinationPrice4: number = 4500;
  destinationNights4: number =19;
  destinationCity4: string ="Tokyo";
  destinationName5: string ="Dreamlocation 5";
  destinationPrice5: number = 440;
  destinationNights5: number =4;
  destinationCity5: string ="Vienna";
  destinationName6: string ="Dreamlocation 6";
  destinationPrice6: number = 120.000;
  destinationNights6: number = 10;
  destinationCity6: string ="Space Station Nebula X";
  constructor() { }

  ngOnInit(): void {
  }

}
