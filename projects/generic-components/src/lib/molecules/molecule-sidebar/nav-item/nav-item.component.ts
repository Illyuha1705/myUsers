import { Component, Input } from '@angular/core';
import { MenuItem, NavigationLInk } from '../../../../../../../src/app/navigation/models/navigation';
@Component({
  selector: 'gc-nav-item',
  templateUrl: 'nav-item.component.html',
  styleUrls: ['nav-item.component.scss'],
})
export class navItemComponent {
  @Input() navigationItem: MenuItem;

  get navigationItemLink(): NavigationLInk {
    return this.navigationItem.link;
  }
}
