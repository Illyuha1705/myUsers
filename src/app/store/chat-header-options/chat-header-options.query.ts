import { QueryEntity } from '@datorama/akita';
import { ChatHeaderOptionsState, ChatHeaderOptionStore } from './chat-header-options.store';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatHeaderOptionsQuery extends QueryEntity<ChatHeaderOptionsState> {
  constructor(protected chatHeaderOptionStore: ChatHeaderOptionStore) {
    super(chatHeaderOptionStore);
  }
}
