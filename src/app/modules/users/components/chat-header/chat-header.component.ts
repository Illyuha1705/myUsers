import { Component, Input } from '@angular/core';
import { UserInterface } from '../../../../interfaces/user.interface';
import { IconInterface } from '../../../../interfaces/icon.interface';

@Component({
  selector: 'app-users-header',
  templateUrl: 'chat-header.component.html',
  styleUrls: ['chat-header.component.scss'],
})
export class ChatHeaderComponent {
  @Input() selectedUser: UserInterface;

  options: IconInterface[] = [
    { alt: 'Search in chat', src: 'assets/img/find-search.svg' },
    { alt: 'Phone to selected user', src: 'assets/img/phone-call.svg' },
    { alt: 'See selected user profile', src: 'assets/img/user-profile.svg' },
    { alt: 'Open chat menu', src: 'assets/img/menu.svg' },
  ];
}
