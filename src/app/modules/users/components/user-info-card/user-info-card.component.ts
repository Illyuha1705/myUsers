import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../../../../../../projects/generic-components/src/lib/interfaces/user.interface';
import { DropdownOption } from '../../../../interfaces/dropdown-option.interface';
import { UsersStoreService } from '../../../../store/users/users-store.service';

@Component({
  selector: 'app-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss'],
})
export class UserInfoCardComponent {
  @Output() closeButtonWasClicked$: EventEmitter<string> = new EventEmitter<string>();
  @Input() user: UserInterface;

  dropdownMenuOptions: DropdownOption[] = [
    { id: 0, name: 'Edit contact', value: 0, imgSrc: 'assets/img/edit-pencil.svg', imgAlt: 'Edit user info' },
    { id: 0, name: 'Delete contact', value: 1, imgSrc: 'assets/img/delete-bin.svg', imgAlt: 'Delete user' },
  ];

  constructor(private usersStoreService: UsersStoreService) {}

  closeCard(userId: string): void {
    this.closeButtonWasClicked$.emit(userId);
  }

  executeDropdownOption(option: DropdownOption) {
    const optionsMethods: { [key: number]: () => void } = {
      0: () => console.log('edit user'),
      1: () => this.removeChat(),
    };

    optionsMethods[option.value]();
  }

  removeChat(): void {
    this.usersStoreService.removeUserById(this.user.id);
  }
}
