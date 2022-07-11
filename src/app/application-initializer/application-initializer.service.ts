import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class ApplicationInitializerService {
  constructor(private translate: TranslateService) {}

  public init(): Promise<void> {
    this.translate.setDefaultLang('en');
    return new Promise<void>((resolve) => {
      console.log('Initializer works');
      resolve();
    });
  }
}
