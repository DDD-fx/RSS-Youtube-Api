import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInfoPageComponent } from './detailed-info-page.component';

const routes: Routes = [{ path: '', component: DetailedInfoPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailedInfoPageRoutingModule {}
