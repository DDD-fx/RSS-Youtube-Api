import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDetailedInfoComponent } from './custom-detailed-info.component';

const routes: Routes = [{ path: '', component: CustomDetailedInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomDetailedInfoRoutingModule {}
