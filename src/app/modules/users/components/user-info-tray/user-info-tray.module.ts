import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoTrayComponent } from './user-info-tray.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UserInfoTrayComponent],
  exports: [UserInfoTrayComponent],
})
export class UserInfoTrayModule {}
