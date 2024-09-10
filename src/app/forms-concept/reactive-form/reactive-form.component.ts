import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './reactive-form.component.html',
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, NgFor],
})
export class ReactiveFormComponent {
  favouriteColorControl = new FormControl('');
  formBuilder = inject(FormBuilder);
  profile = new FormGroup({
    firstName: new FormControl('', Validators.required),
    // Adding two build in validations
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      pobox: new FormControl(''),
    }),
  });
  profileBuilder = this.formBuilder.group({
    firstName: [''],
    lastName: this.formBuilder.control('', [
      Validators.required,
      Validators.minLength(4),
      this.haveAtleastTwoAInLastName(),
    ]),
    address: this.formBuilder.group({
      street: [''],
      pobox: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  get aliases() {
    return this.profileBuilder.get('aliases') as FormArray;
  }

  addControlToArray() {
    this.aliases.push(this.formBuilder.control(''));
  }
  onSubmit() {
    console.log('Form has been submitted.');
  }
  updateForm() {
    this.profile.patchValue({
      firstName: 'Pravin',
      address: {
        street: 'Einbahnstrasse',
      },
    });
  }

  haveAtleastTwoAInLastName(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control?.value &&
        (control.value as string).split('a').length - 1 < 2
        ? { needTwoA: 'Two A is not present' }
        : null;
    };
  }
}
