import { Component, Input, Output } from '@angular/core';
import { UserInterface } from '../../../../../../src/app/interfaces/user.interface';
import { Subject } from 'rxjs';

@Component({
  selector: 'gc-card',
  templateUrl: './molecule-card.component.html',
  styleUrls: ['./molecule-card.component.scss']
})
export class MoleculeCardComponent {
  @Output() closeButtonWasClicked$: Subject<void> = new Subject<void>();
  @Input() user: UserInterface;

  closeCard(): void {
    this.closeButtonWasClicked$.next();
  }
}
