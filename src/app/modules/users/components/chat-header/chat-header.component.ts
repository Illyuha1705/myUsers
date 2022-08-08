import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '../../../../interfaces/user.interface';
import { ChatHeaderOption } from '../../../../interfaces/chat-header-option.interface';
import { ChatHeaderOptionStore } from '../../../../store/chat-header-options/chat-header-options.store';
import { UsersStoreService } from '../../../../store/users/users-store.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: 'chat-header.component.html',
  styleUrls: ['chat-header.component.scss'],
})
export class ChatHeaderComponent implements OnInit {
  @Input() selectedUser: UserInterface;
  isUserInfoOpen: boolean;

  options: ChatHeaderOption[] = [
    { alt: 'Search in chat', src: 'assets/img/find-search.svg', isCustomOption: false },
    { alt: 'Phone to selected user', src: 'assets/img/phone-call.svg', isCustomOption: false },
    { alt: 'See selected user profile', src: 'assets/img/user-profile.svg', isCustomOption: false },
    { alt: 'Open chat menu', src: 'assets/img/menu.svg', isCustomOption: true },
  ];

  constructor(private chatHeaderOptionStore: ChatHeaderOptionStore, private usersStoreService: UsersStoreService) {}

  ngOnInit(): void {
    this.chatHeaderOptionStore.set(this.options);
  }

  toggleUserInfoCard(): void {
    this.isUserInfoOpen = !this.isUserInfoOpen;
  }

  removeChat(): void {
    this.usersStoreService.removeUserById(this.selectedUser.id);
  }
}
