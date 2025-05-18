import { Component } from '@angular/core';

@Component({
  selector: 'scoss-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  form: {
    fullName: string;
    email: string;
    phone: string;
    company: string;
    needs: string;
  } = {
    fullName: '',
    email: '',
    phone: '',
    company: '',
    needs: ''
  };


// Handle form submission
  onSubmit(): void {
    if (this.form.fullName && this.form.email) {
      // You could send the form data to a backend API here
      console.log('Consultation Request:', this.form);

      // Show a success message (temporary example)
      alert(`Thank you, ${this.form.fullName}! We'll contact you shortly.`);

      // Optionally clear the form
      this.resetForm();
    } else {
      alert('Please fill in the required fields.');
    }
  }

  // Clear the form fields
  resetForm(): void {
    this.form = {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      needs: ''
    };
  }
}