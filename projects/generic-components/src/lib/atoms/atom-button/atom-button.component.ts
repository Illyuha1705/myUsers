import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { btnType } from '../../interfaces/atom-button.interface';

@Component({
  selector: 'button[gc-button]',
  templateUrl: './atom-button.component.html',
  styleUrls: ['./atom-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AtomButtonComponent {
  @Input() btnType: btnType = 'primary';
  @Input() ariaLabel: string | undefined;

  @HostBinding('class') get bindClasses(): string {
    return `gc-btn gc-btn--${this.btnType}`;
  }

  @HostBinding('attr.aria-label') get bindAriaLabel(): string {
    return this.ariaLabel ? this.ariaLabel : `${this.btnType} button`;
  }
}
