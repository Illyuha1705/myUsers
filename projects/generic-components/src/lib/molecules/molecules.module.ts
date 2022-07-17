import { NgModule } from '@angular/core';
import { MoleculeCardModule } from './molecule-card/molecule-card.module';
import { MoleculeSidebarModule } from './molecule-sidebar/molecule-sidebar.module';

@NgModule({
  imports: [MoleculeCardModule, MoleculeSidebarModule],
  exports: [MoleculeCardModule, MoleculeSidebarModule],
})
export class MoleculesModule {}
