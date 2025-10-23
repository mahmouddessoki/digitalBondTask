import { Component, input, signal } from '@angular/core';
import { SocialIcon } from '../../models/social-icon';

@Component({
  selector: 'app-social-icons',
  imports: [],
  templateUrl: './social-icons.html',
  styleUrl: './social-icons.scss'
})
export class SocialIcons {
socialIcons = signal<SocialIcon[]>([
    {
      name: 'fa-facebook-f',
      url: 'https://www.facebook.com/DigitalBondMena/',
      hoverColor:'#1877F2',
      isHovered:false
    },
    {
      name:'fa-instagram',
      url:'https://www.instagram.com/digitalbondmena/',
      hoverColor:'#E1306C',
      isHovered:false
    },
    {
      name:'fa-linkedin-in',
      url:'https://www.linkedin.com/company/digital-bond-mena/',
      hoverColor:'#0077B5',
      isHovered:false
    },
    {
      name:'fa-whatsapp',
      url:'https://wa.me/201021551322',
      hoverColor:'#25D366',
      isHovered:false
    },
    {
      name:'fa-tiktok',
      url:'https://www.tiktok.com/@digitalbondmena',
      hoverColor:'#000000',
      isHovered:false
    },
  ])
}
