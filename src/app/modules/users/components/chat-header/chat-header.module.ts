import { NgModule } from '@angular/core';
import { ChatHeaderComponent } from './chat-header.component';
import { CommonModule } from '@angular/common';
import { MoleculeCardModule } from '@my-users/generic-components';
import { ChatHeaderOptionsModule } from '../../../../store/chat-header-options/chat-header-options.module';
import { DirectivesModule } from '../../../../directives/directives.module';
import { ChatHeaderOptionModule } from '../chat-header-option/chat-header-option.module';

@NgModule({
  declarations: [ChatHeaderComponent],
  imports: [CommonModule, MoleculeCardModule, ChatHeaderOptionsModule, DirectivesModule, ChatHeaderOptionModule],
  exports: [ChatHeaderComponent],
})
export class ChatHeaderModule {}
