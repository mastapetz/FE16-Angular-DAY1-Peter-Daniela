import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroHeading: string =`Lovely Vacation Fullfilling All Your Dreams`;
  heroText: string = `When you need to escape and experience something new and shut of the everyday noise`
  heroBtnText: string = `Learn More`;
  heroBtnUrl: string = `about`
  constructor() { }

  ngOnInit(): void {
  }

}
