import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  activeSection = 'home';

  @HostListener('window:scroll')
  onScroll() {
    const sections = ['home', 'why-us', 'services', 'projects', 'testimonials', 'contact'];
    let current = 'home';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // If the section's top is near the top of the viewport
        if (rect.top <= 150) {
          current = section;
        }
      }
    }
    this.activeSection = current;
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
