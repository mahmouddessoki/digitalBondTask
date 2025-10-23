import { Component, computed, inject } from '@angular/core';
import { IReview } from './interfaces/review';
/**owl carousel */
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

/**ngx stars */
import { NgxStarsModule } from 'ngx-stars';
import { AppMode } from '../../../../core/services/app-mode';

@Component({
  selector: 'app-review',
  imports: [CarouselModule, NgxStarsModule],
  templateUrl: './review.html',
  styleUrl: './review.scss',
})
export class Review {
  private theme = inject(AppMode)
  isDarkMode = computed(() => this.theme.isDark());
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsData: true,
    autoplay: true,
    navSpeed: 300,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };
  reviews: IReview[] = [
    {
      id: '1',
      img: 'assets/images/reviews/client1.jpg',
      name: 'Ahmed El-Sayed',
      position: 'Brand Manager at Nova Cosmetics',
      rating: 5,
      comment:
        'Working with this agency transformed our online presence. Their social media campaigns brought in real engagement and boosted our brand awareness significantly!',
    },
    {
      id: '2',
      img: 'assets/images/reviews/client2.jpg',
      name: 'Omar Khalid',
      position: 'E-Commerce Director at Trendify',
      rating: 4.5,
      comment:
        'Their SEO strategy improved our search rankings within weeks. The team is professional, responsive, and really understands digital growth.',
    },
    {
      id: '3',
      img: 'assets/images/reviews/client3.jpg',
      name: 'Ali Hassan',
      position: 'Marketing Lead at TechWave Solutions',
      rating: 3.7,
      comment:
        'Exceptional service! The content marketing and paid ad campaigns delivered measurable results. Highly recommend this agency for anyone serious about digital marketing.',
    },
  ];
  getTrustedSnippet(currentImage: string) {
  let htmlSnippet = `<img src=${currentImage} alt='review client' />`;

  return htmlSnippet;
  }
}
