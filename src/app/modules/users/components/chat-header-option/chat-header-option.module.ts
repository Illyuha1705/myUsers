import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHeaderOptionComponent } from './chat-header-option.component';
import { DirectivesModule } from '../../../../directives/directives.module';

@NgModule({
  imports: [CommonModule, DirectivesModule],
  declarations: [ChatHeaderOptionComponent],
  exports: [ChatHeaderOptionComponent],
})
export class ChatHeaderOptionModule {}
