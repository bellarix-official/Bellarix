import { Component, AfterViewInit, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('Bellarix | Premium IT Solutions, AI Automation & Web Development');

  constructor(
    private titleService: Title, 
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.titleService.setTitle(this.title());
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        AOS.init({
          once: true,
          offset: 50,
          duration: 800,
          easing: 'ease-in-out',
        });
        AOS.refresh();
      }, 100);
    }
  }
}
