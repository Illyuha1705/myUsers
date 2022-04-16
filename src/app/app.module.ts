import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../../projects/generic-components/src/lib/atoms/atoms.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, AtomsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
