import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent {

  title = 'Validador';
  name = new FormControl('pon tu nombre',
    [Validators.required, Validators.maxLength(8), this.ageRangeValidator]);

  NameEditorComponent() {

  }

  public ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    console.log('control', control);
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
      return {ageRange: true};
    }
    return null;
  }
}
