import { NgModule } from '@angular/core';
import { MoleculeSidebarComponent } from './molecule-sidebar.component';
import { AtomNavItemModule } from '../../atoms/atom-nav-item/atom-nav-item.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MoleculeSidebarComponent],
  imports: [CommonModule, AtomNavItemModule],
  exports: [MoleculeSidebarComponent],
})
export class MoleculeSidebarModule {}
