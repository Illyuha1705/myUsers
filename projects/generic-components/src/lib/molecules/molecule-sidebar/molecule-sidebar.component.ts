import {AfterViewInit, ChangeDetectorRef, Component, OnInit, Output} from '@angular/core';
import { NavigationSchemaService } from '../../../../../../src/app/navigation/services/navigation-schema.service';
import { MenuItem } from '../../../../../../src/app/navigation/models/navigation';
import { Subject } from 'rxjs';

@Component({
  selector: 'gc-sidebar',
  templateUrl: 'molecule-sidebar.component.html',
  styleUrls: ['molecule-sidebar.component.scss'],
})
export class MoleculeSidebarComponent implements OnInit, AfterViewInit {
  @Output() allUsersChosen$: Subject<void> = new Subject<void>();
  menuItemsChanged$: Subject<MenuItem[]> = new Subject<MenuItem[]>();

  constructor(private navigationSchemaService: NavigationSchemaService, private detectChanges: ChangeDetectorRef) {}

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

  onNavItemClick(id: string): void {
    console.log('click')
    if (id === 'navItem-0') this.allUsersChosen$.next();
  }

  private generateNavigation(): void {
    const newMenuLinks: MenuItem[] = this.navigationSchemaService.getSchema();
    this.menuItemsChanged$.next(newMenuLinks);
    this.detectChanges.detectChanges();
  }
}
