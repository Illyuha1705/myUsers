import { AfterViewInit, ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';
import { NavigationSchemaService } from '../../../../../../src/app/navigation/services/navigation-schema.service';
import { MenuItem } from '../../../../../../src/app/navigation/models/navigation';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'gc-sidebar',
  templateUrl: 'molecule-sidebar.component.html',
  styleUrls: ['molecule-sidebar.component.scss'],
})
export class MoleculeSidebarComponent implements OnInit, AfterViewInit {
  @Output() allUsersChosen$: Subject<void> = new Subject<void>();
  menuItemsChanged$: Subject<MenuItem[]> = new Subject<MenuItem[]>();

  constructor(
    private navigationSchemaService: NavigationSchemaService,
    private detectChanges: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navigationSchemaService.reinitializeNavigation$.subscribe({
      next: (schema: MenuItem[]) => {
        this.menuItemsChanged$.next(schema);
        this.detectChanges.detectChanges();
      },
    });
  }

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
