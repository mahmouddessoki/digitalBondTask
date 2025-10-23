import { Component, Input, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  imports: [],
  templateUrl: './validation-message.html',
  styleUrl: './validation-message.scss',
})
export class ValidationMessage {
  @Input() control!: AbstractControl | null;
}
