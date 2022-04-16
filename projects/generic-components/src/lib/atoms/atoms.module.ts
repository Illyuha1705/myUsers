import { NgModule } from '@angular/core';
import { AtomButtonModule } from './atom-button/atom-button.module';

@NgModule({
  imports: [AtomButtonModule],
  exports: [AtomButtonModule],
})
export class AtomsModule {}
