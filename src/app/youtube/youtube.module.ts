import { NgModule } from '@angular/core';
import { SortingComponent } from './components/sorting/sorting.component';
import { SearchResultBlockComponent } from './components/search-result-block/search-result-block.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchComponent } from './components/search/search.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { RouterLinkWithHref } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CustomCardComponent } from './components/custom-card/custom-card.component';

@NgModule({
  declarations: [
    SortingComponent,
    SmallCardComponent,
    SearchResultBlockComponent,
    SearchComponent,
    FilterPipe,
    CustomCardComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterLinkWithHref,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [SearchComponent, SearchResultBlockComponent, SmallCardComponent, SortingComponent],
})
export class YoutubeModule {}
