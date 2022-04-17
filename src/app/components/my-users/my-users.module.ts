import { NgModule } from '@angular/core';
import { MyUsersComponent } from './my-users.component';
import { AtomsModule, MoleculesModule } from '@my-users/generic-components';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MyUsersComponent],
  imports: [AtomsModule, CommonModule, BrowserModule, HttpClientModule, MoleculesModule],
  exports: [MyUsersComponent],
})
export class MyUsersModule {}
