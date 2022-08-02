import { NgModule } from '@angular/core';
import { ChatHeaderComponent } from './chat-header.component';
import { CommonModule } from '@angular/common';
import { MoleculeCardModule } from '@my-users/generic-components';

@NgModule({
  declarations: [ChatHeaderComponent],
  imports: [CommonModule, MoleculeCardModule],
  exports: [ChatHeaderComponent],
})
export class ChatHeaderModule {}
