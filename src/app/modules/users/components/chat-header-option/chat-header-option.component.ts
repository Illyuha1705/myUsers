import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChatHeaderOptionStore } from '../../../../store/chat-header-options/chat-header-options.store';
import { ChatHeaderOptionsQuery } from '../../../../store/chat-header-options/chat-header-options.query';
import { UserInfoService } from '../../../../services/user-info/user-info.service';
import { ChatHeaderOption } from '../../../../interfaces/chat-header-option.interface';

@Component({
  selector: 'app-chat-header-option',
  templateUrl: './chat-header-option.component.html',
  styleUrls: ['./chat-header-option.component.scss'],
})
export class ChatHeaderOptionComponent {
  @Output() removeChat$: EventEmitter<void> = new EventEmitter<void>();
  @Input() isCustomOption: boolean;
  @Input() isCustomActiveOption: boolean;
  @Input() imagePath: string;
  @Input() imageAlt: string;
  @Input() id: number;

  isDropdownOpen = false;
  chatMenuOptions = [
    { id: 1, name: 'Mute notifications' },
    { id: 2, name: 'View profile' },
    { id: 3, name: 'Delete chat' },
  ];

  constructor(
    private chatHeaderOptionStore: ChatHeaderOptionStore,
    private chatHeaderOptionsQuery: ChatHeaderOptionsQuery,
    private userInfoService: UserInfoService
  ) {}

  handleOptionClick() {
    !this.isCustomActiveOption ? this.chatHeaderOptionStore.setActive(this.id) : this.storeCustomOption();
    this.executeOption();
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
    const optionsMethods: { [key: number]: () => void } = {
      0: () => console.log('mute chat'),
      1: () => this.userInfoService.showUserInfoSection$.emit(),
      2: () => this.removeChat$.emit(),
    };

    optionsMethods[id]();
  }

  get isOptionSelected(): boolean {
    return this.chatHeaderOptionsQuery.getActiveId() === this.id;
  }

  get isCustomOptionActive(): boolean | undefined {
    return this.chatHeaderOptionsQuery.getEntity(1)?.isCustomOptionActive;
  }

  private executeOption(): void {
    const optionsMethods: { [key: number]: () => void } = {
      0: () => console.log('search'),
      1: () => console.log('call'),
      2: () => this.userInfoService.showUserInfoTray$.emit(),
    };

    optionsMethods[this.id]();
  }

  private toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (!this.isDropdownOpen) this.chatHeaderOptionStore.setActive(null);
  }

  private storeCustomOption(): void {
    this.chatHeaderOptionsQuery.getEntity(1)?.isCustomOptionActive
      ? this.chatHeaderOptionStore.set({ 1: { isCustomOptionActive: false } as ChatHeaderOption })
      : this.chatHeaderOptionStore.set({ 1: { isCustomOptionActive: true } as ChatHeaderOption });
  }
}
