import { NgModule } from '@angular/core';
import { MyUsersComponent } from './my-users.component';
import { AtomsModule, MoleculesModule } from '@my-users/generic-components';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../helpers/ngx-translate';
import { UsersService } from '../../services/users-service/users.service';
import { UsersStoreModule } from '../../store/users/users-store.module';

@NgModule({
  declarations: [MyUsersComponent],
  imports: [
    AtomsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MoleculesModule,
    UsersStoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true,
    }),
  ],
  providers: [UsersService],
  exports: [MyUsersComponent],
})
export class MyUsersModule {}
