import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-more-info',
  templateUrl: 'more-info-component.html',
  styleUrls: ['more-info-component.scss'],
})
export class MoreInfoComponent implements OnInit {
  @Output() closeButtonWasClicked$: EventEmitter<void> = new EventEmitter<void>();
  @Input() userPreviousUrl: string;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.userPreviousUrl = this.translateService.instant('APP.MORE_INFO.PREVIOUS_URL') + this.userPreviousUrl;
  }

  closeMoreInfo(): void {
    this.userPreviousUrl = '';
    this.closeButtonWasClicked$.emit();
  }
}
