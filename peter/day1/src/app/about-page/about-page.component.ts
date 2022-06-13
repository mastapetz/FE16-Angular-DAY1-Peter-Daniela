import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  thisclass: string = `We offer you unique experience everywhere on earth and almost everywhere in this Galaxy`;

  constructor() { }

  ngOnInit(): void {
  }

}
