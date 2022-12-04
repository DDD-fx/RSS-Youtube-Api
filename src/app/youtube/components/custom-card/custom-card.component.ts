import { Component, Input } from '@angular/core';
import { TNewCardForm } from '../../../shared/models/create-card.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['../small-card/small-card.component.scss'],
})
export class CustomCardComponent {
  @Input() customCardData!: TNewCardForm;

  constructor(private store: Store, private router: Router) {}

  showCustomDescription() {
    void this.router.navigate(['customVideo', this.customCardData.videoLink]);
  }
}
