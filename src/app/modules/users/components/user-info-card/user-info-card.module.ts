import { NgModule } from '@angular/core';
import { UserInfoCardComponent } from './user-info-card.component';
import { AtomButtonModule, MoleculeDropdownModule } from '@my-users/generic-components';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../../../../directives/directives.module';

@NgModule({
  declarations: [UserInfoCardComponent],
  imports: [AtomButtonModule, CommonModule, MoleculeDropdownModule, DirectivesModule],
  exports: [UserInfoCardComponent],
})
export class UserInfoCardModule {}
