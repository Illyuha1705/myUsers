import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyUsersModule } from './components/my-users/my-users.module';
import { AppRoutingModule } from './app.routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './utils/ngx-translate';
import { HttpClient } from '@angular/common/http';
import { ApplicationInitializerModule } from './application-initializer/application-initializer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MyUsersModule,
    AppRoutingModule,
    ApplicationInitializerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      extend: true,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
