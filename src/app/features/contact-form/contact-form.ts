import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {

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
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, instrument, message } =
      this.contactForm.getRawValue();

    const subject = `${name} möchte ${instrument} lernen`;

    let emailMessage =
      `${name} hat Interesse daran, ${instrument} zu lernen.

Mache einen Termin mit ihm aus und antworte unter folgender E-Mail-Adresse:

${email}`;


    if (message.trim()) {
      emailMessage += `

${name} hat folgende Nachricht hinterlassen:

${message}`;
    }


    console.log('Betreff:', subject);
    console.log('Nachricht:', emailMessage);
  }

}
