import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { WhyUs } from '../../components/why-us/why-us';
import { Services } from '../../components/services/services';
import { Projects } from '../../components/projects/projects';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Contact } from '../../components/contact/contact';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, WhyUs, Services, Projects, Testimonials, Contact, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
