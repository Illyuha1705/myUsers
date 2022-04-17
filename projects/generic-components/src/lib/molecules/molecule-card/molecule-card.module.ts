import { NgModule } from '@angular/core';
import { MoleculeCardComponent } from './molecule-card.component';
import { AtomButtonModule } from '../../atoms/atom-button/atom-button.module';

@NgModule({
  declarations: [MoleculeCardComponent],
  imports: [AtomButtonModule],
  exports: [MoleculeCardComponent],
})
export class MoleculeCardModule {}
