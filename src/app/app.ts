import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Bellarix - Premium AI, Web & App Development');

  constructor(private titleService: Title, private metaService: Meta) {
    // Dynamically setting SEO (though statically set in index.html for crawlers, 
    // this ensures Angular apps update it upon route changes in the future).
    this.titleService.setTitle(this.title());
    this.metaService.addTags([
      { name: 'description', content: 'Bellarix builds stunning, responsive, and performance-driven digital experiences. We specialize in AI automation, Web development, and App development.' },
      { name: 'keywords', content: 'Bellarix, AI automation, Web Development, App Development, IT Agency Pune, Tech Startup' },
      { name: 'author', content: 'Bellarix' },
      { property: 'og:title', content: this.title() },
      { property: 'og:description', content: 'We build cutting-edge digital experiences, empowering businesses with stunning, responsive, and performance-driven solutions.' }
    ]);
  }

  ngOnInit() {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: 'ease-in-out',
    });
  }
}
