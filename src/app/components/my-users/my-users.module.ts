import { NgModule } from '@angular/core';
import { MyUsersComponent } from './my-users.component';
import { AtomsModule, MoleculesModule } from '@my-users/generic-components';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpLoaderFactory } from  '../../helpers/ngx-translate';

@NgModule({
  declarations: [MyUsersComponent],
  imports: [
    AtomsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MoleculesModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true,
    }),
  ],
  exports: [MyUsersComponent],
})
export class MyUsersModule {}
