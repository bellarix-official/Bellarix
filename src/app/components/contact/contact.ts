import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  sendMessage() {
    if (!this.formData.firstName || !this.formData.message) {
      alert("Please fill in your name and message.");
      return;
    }

    const phoneNumber = "919975651624";
    const text = `Hello Bellarix!\n\nI am ${this.formData.firstName} ${this.formData.lastName}.\nEmail: ${this.formData.email}\n\nMessage:\n${this.formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  }
}
