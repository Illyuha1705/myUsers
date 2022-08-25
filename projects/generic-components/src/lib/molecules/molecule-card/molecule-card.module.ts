import { NgModule } from '@angular/core';
import { MoleculeCardComponent } from './molecule-card.component';
import { AtomButtonModule } from '../../atoms/atom-button/atom-button.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MoleculeCardComponent],
  imports: [AtomButtonModule, CommonModule],
  exports: [MoleculeCardComponent],
})
export class MoleculeCardModule {}
