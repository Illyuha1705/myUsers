import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownOption } from '../../interfaces/dropdown-option.interface';

@Component({
  selector: 'gc-dropdown',
  templateUrl: 'molecule-dropdown.component.html',
  styleUrls: ['molecule-dropdown.component.scss'],
})
export class MoleculeDropdownComponent {
  @Output() chosenOption: EventEmitter<DropdownOption> = new EventEmitter<DropdownOption>();
  @Input() dropdownList: Array<DropdownOption> = [];
  isDropdownOpen = false;

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectItem(event: Event, dropdownOption: DropdownOption): void {
    event.stopPropagation();
    this.chosenOption.emit(dropdownOption);
    this.toggleDropdown();
  }
}
