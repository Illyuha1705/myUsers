import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../../../../../../projects/generic-components/src/lib/interfaces/user.interface';

@Component({
  selector: 'app-user-info-tray',
  templateUrl: 'user-info-tray.component.html',
  styleUrls: ['user-info-tray.component.scss'],
})
export class UserInfoTrayComponent {
  @Output() closeButtonWasClicked$: EventEmitter<string> = new EventEmitter<string>();
  @Input() user: UserInterface;

  closeCard(userId: string) {
    this.closeButtonWasClicked$.emit(userId);
  }
}
