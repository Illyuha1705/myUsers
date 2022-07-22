import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'gc-card',
  templateUrl: './molecule-card.component.html',
  styleUrls: ['./molecule-card.component.scss'],
})
export class MoleculeCardComponent {
  @Output() closeButtonWasClicked$: EventEmitter<string> = new EventEmitter<string>();
  @Input() user: UserInterface;

  closeCard(userId: string): void {
    this.closeButtonWasClicked$.emit(userId);
  }
}
