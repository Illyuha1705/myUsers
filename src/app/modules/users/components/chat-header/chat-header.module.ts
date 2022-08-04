import { NgModule } from '@angular/core';
import { ChatHeaderComponent } from './chat-header.component';
import { CommonModule } from '@angular/common';
import { MoleculeCardModule } from '@my-users/generic-components';
import { ChatHeaderOptionsModule } from '../../../../store/chat-header-options/chat-header-options.module';

@NgModule({
  declarations: [ChatHeaderComponent],
  imports: [CommonModule, MoleculeCardModule, ChatHeaderOptionsModule],
  exports: [ChatHeaderComponent],
})
export class ChatHeaderModule {}
