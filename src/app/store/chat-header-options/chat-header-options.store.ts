import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ChatHeaderOption } from '../../interfaces/chat-header-option.interface';

export interface ChatHeaderOptionsState extends EntityState<ChatHeaderOption, number>, ActiveState {}

@StoreConfig({ name: 'HeaderOptionStore' })
export class ChatHeaderOptionStore extends EntityStore<ChatHeaderOptionsState> {
  constructor() {
    super();
  }
}
