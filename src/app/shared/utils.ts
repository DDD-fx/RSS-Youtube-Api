import { ECardColors } from '../app.enums';
import {
  lowerCaseSymbols,
  MILLISECONDS_IN_DAY,
  MIN_NUMBER_OF_DAYS_FOR_GREEN_CARD,
  MIN_NUMBER_OF_DAYS_FOR_RED_CARD,
  MIN_NUMBER_OF_DAYS_FOR_YELLOW_CARD,
  nums,
  specialSymbols,
  upperCaseSymbols,
} from '../app.consts';
import { AbstractControl } from '@angular/forms';
import { IValidationErrors } from './models/validation-errors';

export const getCardColor = (publishedDate: string): ECardColors => {
  const today = Date.now();
  const publishedAt = Date.parse(publishedDate);
  const daysCount = (today - publishedAt) / MILLISECONDS_IN_DAY;

  if (daysCount < MIN_NUMBER_OF_DAYS_FOR_GREEN_CARD) {
    return ECardColors.blue;
  } else if (daysCount < MIN_NUMBER_OF_DAYS_FOR_YELLOW_CARD) {
    return ECardColors.green;
  } else if (daysCount < MIN_NUMBER_OF_DAYS_FOR_RED_CARD) {
    return ECardColors.yellow;
  } else {
    return ECardColors.red;
  }
};

export function dateValidator(date: AbstractControl) {
  if (new Date().getTime() - new Date(date.value).getTime() < 0) {
    return {
      invalidFutureDate: true,
    };
  } else if (isNaN(Date.parse(date.value)) || date.value.length < 10) {
    return {
      invalidDateFormat: true,
    };
  }
  return null;
}

export function passwordValidator(pw: AbstractControl): IValidationErrors | null {
  const validationErrors = {} as IValidationErrors;

  if (pw.value.length < 8) validationErrors.invalidLength = true;
  if (!upperCaseSymbols.test(pw.value) || !lowerCaseSymbols.test(pw.value)) validationErrors.invalidUpperLower = true;
  if (!specialSymbols.test(pw.value)) validationErrors.invalidSpecialSymbol = true;
  if (!nums.test(pw.value)) validationErrors.invalidNums = true;

  if (Object.keys(validationErrors).length) return validationErrors;
  return null;
}
