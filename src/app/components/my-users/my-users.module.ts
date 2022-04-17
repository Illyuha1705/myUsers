import { NgModule } from '@angular/core';
import { MyUsersComponent } from './my-users.component';
import { AtomsModule } from '@my-users/generic-components';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MyUsersComponent],
  imports: [AtomsModule, CommonModule, BrowserModule, HttpClientModule],
  exports: [MyUsersComponent],
})
export class MyUsersModule {}
