import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject, signal } from '@angular/core';
@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {

  private http = inject(HttpClient);
  sendSuccess = signal(false);
  sendError = signal(false);

  contactForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),

    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email,
      ],
    }),

    instrument: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),

    message: new FormControl('', {
      nonNullable: true,
    }),

    // Honeypot
    company: new FormControl('', {
      nonNullable: true,
    }),
  });


  constructor() {
    this.contactForm.controls.instrument.valueChanges.subscribe(
      (instrument) => {

        const messageControl = this.contactForm.controls.message;

        if (instrument === 'Nicht dabei') {
          messageControl.setValidators([Validators.required]);
        } else {
          messageControl.clearValidators();
        }

        messageControl.updateValueAndValidity();
      }
    );
  }


  get messageLabel(): string {
    const instrument = this.contactForm.controls.instrument.value;

    if (instrument === 'Nicht dabei') {
      return 'Welches Instrument möchtest du lernen?';
    }

    return 'Nachricht (optional)';
  }


  onSubmit() {

    // Alle Felder als "berührt" markieren
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log(this.contactForm.value);

    this.http.post(
      '/send-mail.php',
      this.contactForm.value
    ).subscribe({

      next: () => {

        this.sendSuccess.set(true);
        this.sendError.set(false);

        this.contactForm.reset();
      },

      error: (error) => {

        console.error(error);

        this.sendError.set(true);
        this.sendSuccess.set(false);
      }

    });
  }

}
