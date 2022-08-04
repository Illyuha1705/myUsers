import { NgModule } from '@angular/core';
import { ChatHeaderOptionStore } from './chat-header-options.store';
import { ChatHeaderOptionsQuery } from './chat-header-options.query';

@NgModule({
  providers: [ChatHeaderOptionStore, ChatHeaderOptionsQuery],
})
export class ChatHeaderOptionsModule {}
