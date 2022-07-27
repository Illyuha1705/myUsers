import { NgModule } from '@angular/core';
import { MoleculeSidebarComponent } from './molecule-sidebar.component';
import { NavItemModule } from './nav-item/nav-item.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MoleculeSidebarComponent],
  imports: [CommonModule, NavItemModule, RouterModule],
  exports: [MoleculeSidebarComponent],
})
export class MoleculeSidebarModule {}
