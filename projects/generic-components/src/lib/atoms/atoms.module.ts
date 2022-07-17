import { NgModule } from '@angular/core';
import { AtomButtonModule } from './atom-button/atom-button.module';
import { AtomNavItemModule } from './atom-nav-item/atom-nav-item.module';

@NgModule({
  imports: [AtomButtonModule, AtomNavItemModule],
  exports: [AtomButtonModule],
})
export class AtomsModule {}
