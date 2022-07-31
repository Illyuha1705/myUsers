import { Component, Input } from '@angular/core';
import { MenuItem, NavigationLInk } from '../../../../../../src/app/navigation/models/navigation';
@Component({
  selector: 'gc-nav-item',
  templateUrl: 'atom-nav-item.component.html',
  styleUrls: ['atom-nav-item.component.scss'],
})
export class atomNavItemComponent {
  @Input() navigationItem: MenuItem;

  get navigationItemLink(): NavigationLInk {
    return this.navigationItem.link;
  }
}
