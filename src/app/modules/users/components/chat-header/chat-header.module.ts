import { NgModule } from '@angular/core';
import { ChatHeaderComponent } from './chat-header.component';
import { CommonModule } from '@angular/common';
import { ChatHeaderOptionsModule } from '../../../../store/chat-header-options/chat-header-options.module';
import { DirectivesModule } from '../../../../directives/directives.module';
import { ChatHeaderOptionModule } from '../chat-header-option/chat-header-option.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ChatHeaderComponent],
  imports: [CommonModule, ChatHeaderOptionsModule, DirectivesModule, ChatHeaderOptionModule, TranslateModule],
  exports: [ChatHeaderComponent],
})
export class ChatHeaderModule {}
