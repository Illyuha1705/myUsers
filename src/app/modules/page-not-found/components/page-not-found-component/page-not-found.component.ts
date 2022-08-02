import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { MoreInfoComponent } from '../more-info-component/more-info-component';
import { FormatTextService } from '../../../../services/format-text/format-text.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: 'page-not-found.component.html',
  styleUrls: ['page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  @ViewChild('moreInfo', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;
  private componentRef: ComponentRef<MoreInfoComponent>;

  userPreviousUrl = '';
  disableShowMoreButton = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formatTextService: FormatTextService
  ) {}

  ngOnInit(): void {
    this.updateUserPreviousUrl();
    this.router.navigate(['404']);
  }

  showMoreInfoComponent(): void {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(MoreInfoComponent);

    this.componentRef.instance.userPreviousUrl = this.userPreviousUrl;
    this.componentRef.instance.closeButtonWasClicked$.subscribe({
      next: () => this.closeMoreInfoComponent(),
    });

    this.toggleDisableShowMoreButton();
  }

  closeMoreInfoComponent(): void {
    this.viewRef.clear();
    this.toggleDisableShowMoreButton();
  }

  toggleDisableShowMoreButton(): void {
    this.disableShowMoreButton = !this.disableShowMoreButton;
  }

  private updateUserPreviousUrl(): void {
    this.activatedRoute.snapshot.url.forEach((urlSegment: UrlSegment) => {
      this.userPreviousUrl += urlSegment.path + '/';
    });

    if (this.userPreviousUrl.length > 50) {
      this.userPreviousUrl = this.formatTextService.sliceString(this.userPreviousUrl, 0, 50);
    }
  }
}
