import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateValidator, getCardColor } from '../../utils';
import { urlValidationRegex } from '../../../app.consts';
import { Store } from '@ngrx/store';
import { TNewCardForm } from '../../models/create-card.model';
import { createNewVideoAction } from '../../../redux/actions/actions';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCardComponent {
  public createCardForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description: new FormControl('', Validators.maxLength(255)),
    img: new FormControl('', [Validators.required, Validators.pattern(urlValidationRegex)]),
    videoLink: new FormControl('', [Validators.required, Validators.pattern(urlValidationRegex)]),
    date: new FormControl('', [Validators.required, dateValidator]),
  });

  matcher = new MyErrorStateMatcher();

  constructor(private store: Store) {}

  printTitleError(titleLength: number): string | null {
    if (titleLength < 3) return 'The title is too short (min 3 symbols)';
    if (titleLength > 20) return 'The title is too long (max 20 symbols)';
    return null;
  }

  onCreateCardClick() {
    const mappedFormData: TNewCardForm = {
      id: Date.now(),
      title: this.createCardForm.get('title')!.value!,
      description: this.createCardForm.get('description')!.value!,
      img: this.createCardForm.get('img')!.value!,
      videoLink: this.createCardForm.get('videoLink')!.value!,
      date: this.createCardForm.get('date')!.value!,
      color: getCardColor(this.createCardForm.get('date')!.value!),
    };
    this.store.dispatch(createNewVideoAction({ payload: mappedFormData }));
    this.createCardForm.reset();
  }
}
