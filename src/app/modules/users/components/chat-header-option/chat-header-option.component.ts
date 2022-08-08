import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatHeaderOptionStore } from '../../../../store/chat-header-options/chat-header-options.store';
import { ChatHeaderOptionsQuery } from '../../../../store/chat-header-options/chat-header-options.query';

@Component({
  selector: 'app-chat-header-option',
  templateUrl: './chat-header-option.component.html',
  styleUrls: ['./chat-header-option.component.scss'],
})
export class ChatHeaderOptionComponent {
  @Output() openUserInfo$: EventEmitter<void> = new EventEmitter<void>();
  @Output() removeChat$: EventEmitter<void> = new EventEmitter<void>();
  @Input() isCustomOption: boolean;
  @Input() imagePath: string;
  @Input() imageAlt: string;
  @Input() id: string | number;

  isDropdownOpen = false;

  chatMenuOptions = [
    { id: 1, name: 'Mute notifications', value: '' },
    { id: 2, name: 'View profile', value: '' },
    { id: 3, name: 'Delete chat', value: '' },
  ];

  constructor(
    private chatHeaderOptionStore: ChatHeaderOptionStore,
    private chatHeaderOptionsQuery: ChatHeaderOptionsQuery
  ) {}

  handleOptionClick() {
    this.chatHeaderOptionStore.setActive(this.id);
  }

  handleOptionDropdownClick(): void {
    this.chatHeaderOptionStore.setActive(this.id);
    this.toggleDropdown();
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  executeDropdownOption(id: number): void {
    this.closeDropdown();
    const optionsMethods: { [key: string]: () => void } = {
      0: () => console.log('mute chat'),
      1: () => this.openUserInfo$.emit(),
      2: () => this.removeChat$.emit(),
    };

    optionsMethods[id]();
  }

  get isOptionSelected(): boolean {
    return this.chatHeaderOptionsQuery.getActiveId() === this.id;
  }

  private toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (!this.isDropdownOpen) this.chatHeaderOptionStore.setActive(null);
  }
}
