import { Component, Input } from '@angular/core';
import { UserInterface } from '../../../../interfaces/user.interface';
import { UsersStoreService } from '../../../../store/users/users-store.service';
import { UserInfoService } from '../../../../services/user-info/user-info.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: 'chat-header.component.html',
  styleUrls: ['chat-header.component.scss'],
})
export class ChatHeaderComponent {
  @Input() selectedUser: UserInterface;

  constructor(private usersStoreService: UsersStoreService, private userInfoService: UserInfoService) {}

  removeChat(): void {
    this.usersStoreService.removeUserById(this.selectedUser.id);
  }

  toggleUserInfoCard(): void {
    this.userInfoService.showUserInfoSection$.emit();
  }
}
