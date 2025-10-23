import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  digitalBondFeatures = [
    {
      title: 'Vision',
      description:'To become the top agency offering online marketing solutions, digital sales services, and software development in the MENA business sphere.',
      img:'vision.png'

    },
    {
      title: 'Value',
      description:'Accountability, Honesty, Simplicity & Curiosity.',
      img:'mission.png'

    }
  ]

}
