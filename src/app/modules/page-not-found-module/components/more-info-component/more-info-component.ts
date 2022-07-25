import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-more-info',
  templateUrl: 'more-info-component.html',
  styleUrls: ['more-info-component.scss'],
})
export class MoreInfoComponent implements OnInit {
  @Output() closeButtonWasClicked$: EventEmitter<void> = new EventEmitter<void>();
  @Input() userPreviousUrl: string;

  ngOnInit(): void {
    this.userPreviousUrl = 'You have tried to open page by URL: ' + this.userPreviousUrl;
  }

  closeMoreInfo(): void {
    this.userPreviousUrl = '';
    this.closeButtonWasClicked$.emit();
  }
}
