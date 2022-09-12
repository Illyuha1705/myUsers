import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHeaderOptionComponent } from './chat-header-option.component';
import { DirectivesModule } from '../../../../directives/directives.module';
import { MoleculeDropdownModule } from '@my-users/generic-components';

@NgModule({
  imports: [CommonModule, DirectivesModule, MoleculeDropdownModule],
  declarations: [ChatHeaderOptionComponent],
  exports: [ChatHeaderOptionComponent],
})
export class ChatHeaderOptionModule {}
