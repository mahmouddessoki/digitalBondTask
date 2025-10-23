import { Component, inject } from '@angular/core';
import { IContact } from './interfaces/icontact';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { globalValidator } from './utilities/global-validators';
import { ValidationMessage } from "../../../../shared/components/validation-message/validation-message";
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, ValidationMessage],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  contacts: IContact[] = [
    {
      icon: 'fa-solid fa-phone',
      title: 'Phone',
      info: '+2 - 01021551322',
    },
    {
      icon: 'fa-solid fa-envelope',
      title: 'Email',
      info: 'Bonder@digitalbondmena.com',
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'Address',
      info: '11 Dr El-Sebaey, Ad Dokki, Giza Governorate',
    },
  ];

  private _fb = inject(FormBuilder)
  contactForm!: FormGroup

  initContactForm(){
    this.contactForm = this._fb.group({
      name: [null, globalValidator.nameValidate],
      email: [null,globalValidator.emailValidate],
      phone: [null, globalValidator.phoneValidate],
      message: [null,globalValidator.messageValidate],
    });
  }

  confirmContact() {}


  /**component hooks */
  ngOnInit(){
    this.initContactForm()
  }
}
