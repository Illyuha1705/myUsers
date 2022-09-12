import { NgModule } from '@angular/core';
import { MoleculeSidebarModule } from './molecule-sidebar/molecule-sidebar.module';
import { MoleculeDropdownModule } from './molecule-dropdown/molecule-dropdown.module';

@NgModule({
  imports: [MoleculeSidebarModule, MoleculeDropdownModule],
  exports: [MoleculeSidebarModule, MoleculeDropdownModule],
})
export class MoleculesModule {}
