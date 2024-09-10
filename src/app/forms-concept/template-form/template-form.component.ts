import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type Profile = {
  firstName: string;
  lastName?: string;
  address?: {
    street: string;
  };
};
@Component({
  selector: 'app-template-form',
  standalone: true,
  templateUrl: './template-form.component.html',
  imports: [FormsModule],
})
export class TemplateFormComponent {
  favouriteColor?: string;
  profile: Profile = {
    firstName: '',
  };
}
