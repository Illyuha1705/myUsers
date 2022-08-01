import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { NavigationSchemaService } from '../../../../../../src/app/navigation/services/navigation-schema.service';
import { MenuItem } from '../../../../../../src/app/navigation/models/navigation.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

/** gc-sidebar component - sidebar with the list of navigation items and burger menu */

@Component({
  selector: 'gc-sidebar',
  templateUrl: 'molecule-sidebar.component.html',
  styleUrls: ['molecule-sidebar.component.scss'],
})
export class MoleculeSidebarComponent implements AfterViewInit {
  menuItemsChanged$: Subject<MenuItem[]> = new Subject<MenuItem[]>();

  constructor(
    private navigationSchemaService: NavigationSchemaService,
    private detectChanges: ChangeDetectorRef,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.generateNavigation();
  }

  addDefaultRouteQueryParam(firstElementId: string): void {
    this.router.navigate(['/my-users'], { queryParams: { id: firstElementId } });
  }

  private generateNavigation(): void {
    const newMenuLinks: MenuItem[] = this.navigationSchemaService.getSchema();
    this.addDefaultRouteQueryParam(newMenuLinks[0].link.id);
    this.menuItemsChanged$.next(newMenuLinks);
    this.detectChanges.detectChanges();
  }
}
