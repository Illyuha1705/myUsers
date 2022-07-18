import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ApplicationInitializerService } from './application-initializer.service';
import { applicationInitializerFactory } from './application-initializer.factory';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  providers: [
    ApplicationInitializerService,
    {
      provide: APP_INITIALIZER,
      useFactory: applicationInitializerFactory,
      multi: true,
      deps: [ApplicationInitializerService],
    },
  ],
  imports: [TranslateModule],
})
export class ApplicationInitializerModule {}
