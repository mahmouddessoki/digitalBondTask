import { Validators } from '@angular/forms';
import { phoneValidate } from './phone-validation';
import { messageValidate } from './message-validation';

export const globalValidator = {
  nameValidate: [Validators.required, Validators.minLength(2), Validators.maxLength(20)],
  emailValidate: [Validators.required, Validators.email],
  phoneValidate: [Validators.required, phoneValidate],
  messageValidate: [Validators.required, messageValidate],
};
