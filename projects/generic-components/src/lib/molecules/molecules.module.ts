import { NgModule } from '@angular/core';
import { MoleculeCardModule } from './molecule-card/molecule-card.module';

@NgModule({
  imports: [MoleculeCardModule],
  exports: [MoleculeCardModule],
})
export class MoleculesModule {}
