import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { filter, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside: EventEmitter<void> = new EventEmitter<void>();
  documentClickSubscription: Subscription;

  constructor(private elRef: ElementRef, @Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit(): void {
    this.documentClickSubscription = fromEvent(this.document, 'click')
      .pipe(
        filter((event: Event) => {
          return !this.isInside(event.target as HTMLElement);
        })
      )
      .subscribe({
        next: () => this.clickOutside.emit(),
      });
  }

  isInside(elementToCheck: HTMLElement): boolean {
    return elementToCheck === this.elRef.nativeElement || this.elRef.nativeElement.contains(elementToCheck);
  }

  ngOnDestroy(): void {
    this.documentClickSubscription.unsubscribe();
  }
}
