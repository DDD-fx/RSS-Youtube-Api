import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TSmallCard } from '../../models/cards.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallCardComponent {
  @Input() cardData!: TSmallCard;

  constructor(private router: Router) {}

  showDescription(): void {
    void this.router.navigate(['video', this.cardData.videoLink]);
  }
}
