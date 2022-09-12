import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculeDropdownComponent } from './molecule-dropdown.component';
import { DirectivesModule } from '../../../../../../src/app/directives/directives.module';

@NgModule({
  declarations: [MoleculeDropdownComponent],
  imports: [CommonModule, DirectivesModule],
  exports: [MoleculeDropdownComponent],
})
export class MoleculeDropdownModule {}
