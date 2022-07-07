import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { execute } from 'ng-packagr';

@Injectable()
export class ApplicationInitializerService {
  constructor(private translate: TranslateService) {}

  public init(): Promise<void> {
    this.translate.setDefaultLang('ua');
    return new Promise<void>((resolve) => {
      console.log('Initializer works');
      resolve();
    });
  }
}
