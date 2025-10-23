import { Component } from '@angular/core';
import {NgxTypewriterComponent} from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-hero-section',
  imports: [NgxTypewriterComponent],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss'
})
export class HeroSection {
  words: string[] = ['Digital Bonds'];

  ngOnInit() {

  }

}
