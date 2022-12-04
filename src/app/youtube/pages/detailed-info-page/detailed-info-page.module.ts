import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedInfoPageComponent } from './detailed-info-page.component';
import { DetailedInfoPageRoutingModule } from './detailed-info-page-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [DetailedInfoPageComponent],
  imports: [CommonModule, DetailedInfoPageRoutingModule, MatCardModule, MatButtonModule, SharedModule],
})
export class DetailedInfoPageModule {}
