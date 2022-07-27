import { NgModule } from '@angular/core';
import { navItemComponent } from './nav-item.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [navItemComponent],
  imports: [CommonModule, TranslateModule, RouterModule],
  exports: [navItemComponent],
})
export class NavItemModule {}
