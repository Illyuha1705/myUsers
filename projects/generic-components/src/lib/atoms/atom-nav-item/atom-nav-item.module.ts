import { NgModule } from '@angular/core';
import { atomNavItemComponent } from './atom-nav-item.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [atomNavItemComponent],
  imports: [CommonModule, TranslateModule],
  exports: [atomNavItemComponent],
})
export class AtomNavItemModule {}
