import { FormControl } from '@angular/forms';

export const messageValidate = (controls: FormControl) => {
  const message = controls.value;
  if(message && message.trim().length >= 10) {
    return null;
  }else {
    return { invalidMsg: true };
  }
};
