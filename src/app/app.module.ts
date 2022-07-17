import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyUsersModule } from './components/my-users/my-users.module';
import { AppRoutingModule } from './app.routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoaderFactory } from './utils/ngx-translate.util';
import { HttpClient } from '@angular/common/http';
import { ApplicationInitializerModule } from './application-initializer/application-initializer.module';
import { NavigationSchemaService } from './navigation/services/navigation-schema.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MyUsersModule,
    AppRoutingModule,
    ApplicationInitializerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactory,
        deps: [HttpClient],
      },
      extend: true,
    }),
  ],
  providers: [NavigationSchemaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
