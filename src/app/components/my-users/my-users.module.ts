import { NgModule } from '@angular/core';
import { MyUsersComponent } from './my-users.component';
import { AtomsModule, MoleculesModule } from '@my-users/generic-components';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { UsersService } from '../../services/users-service/users.service';
import { UsersStoreModule } from '../../store/users/users-store.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MyUsersComponent],
  imports: [
    AtomsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MoleculesModule,
    UsersStoreModule,
    TranslateModule,
    FormsModule,
  ],
  providers: [UsersService],
  exports: [MyUsersComponent],
})
export class MyUsersModule {}
