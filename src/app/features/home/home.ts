import { Component } from '@angular/core';
import { HeroSection } from "./components/hero-section/hero-section";
import { About } from "./components/about/about";
import { Review } from "./components/review/review";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-home',
  imports: [HeroSection, About, Review, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
