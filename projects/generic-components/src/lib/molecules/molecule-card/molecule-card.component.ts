import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../../../../../../src/app/interfaces/user.interface';

@Component({
  selector: 'gc-card',
  templateUrl: './molecule-card.component.html',
  styleUrls: ['./molecule-card.component.scss'],
})
export class MoleculeCardComponent {
  @Output() closeButtonWasClicked$: EventEmitter<void> = new EventEmitter<void>();
  @Input() user: UserInterface;

  closeCard(): void {
    this.closeButtonWasClicked$.emit();
  }
}
