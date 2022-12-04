import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDetailedInfoRoutingModule } from './custom-detailed-info-page-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CustomDetailedInfoComponent } from './custom-detailed-info.component';

@NgModule({
  declarations: [CustomDetailedInfoComponent],
  imports: [CommonModule, CustomDetailedInfoRoutingModule, MatCardModule, MatButtonModule],
})
export class CustomDetailedInfoModule {}
