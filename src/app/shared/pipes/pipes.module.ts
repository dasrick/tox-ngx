import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [TruncatePipe],
  imports: [],
  exports: [TruncatePipe]
})

export class PipesModule {
}
