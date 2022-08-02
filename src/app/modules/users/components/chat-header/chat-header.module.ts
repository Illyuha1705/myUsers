import { NgModule } from '@angular/core';
import { ChatHeaderComponent } from './chat-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ChatHeaderComponent],
  imports: [CommonModule],
  exports: [ChatHeaderComponent],
})
export class ChatHeaderModule {}
