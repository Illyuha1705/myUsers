import { Component, Input, OnInit } from '@angular/core';
import { UserInterface } from '../../../../interfaces/user.interface';
import { ChatHeaderOption } from '../../../../interfaces/chat-header-option.interface';
import { ChatHeaderOptionStore } from '../../../../store/chat-header-options/chat-header-options.store';
import { ChatHeaderOptionsQuery } from '../../../../store/chat-header-options/chat-header-options.query';

@Component({
  selector: 'app-users-header',
  templateUrl: 'chat-header.component.html',
  styleUrls: ['chat-header.component.scss'],
})
export class ChatHeaderComponent implements OnInit {
  @Input() selectedUser: UserInterface;
  isUserInfoOpen = false;

  options: ChatHeaderOption[] = [
    { alt: 'Search in chat', src: 'assets/img/find-search.svg', id: 0 },
    { alt: 'Phone to selected user', src: 'assets/img/phone-call.svg', id: 1 },
    { alt: 'See selected user profile', src: 'assets/img/user-profile.svg', id: 2 },
    { alt: 'Open chat menu', src: 'assets/img/menu.svg', id: 3 },
  ];

  constructor(
    private chatHeaderOptionStore: ChatHeaderOptionStore,
    private chatHeaderOptionsQuery: ChatHeaderOptionsQuery
  ) {}

  ngOnInit(): void {
    this.chatHeaderOptionStore.set(this.options);
  }

  toggleUserInfoCard(): void {
    this.isUserInfoOpen = !this.isUserInfoOpen;
  }

  handleOptionClick(e: Event, id: number) {
    e.stopPropagation();
    this.chatHeaderOptionStore.setActive(id);
    console.log(this.chatHeaderOptionsQuery.getAll());
  }

  retrieveActiveEntityId(id: number): boolean {
    return this.chatHeaderOptionsQuery.getActiveId() === id;
  }
}
