import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { defaultLang } from '../constants/langs.constant';

@Injectable()
export class ApplicationInitializerService {
  constructor(private translateService: TranslateService) {}

  public init(): Promise<void> {
    this.translateService.setDefaultLang(defaultLang);
    return new Promise<void>((resolve) => {
      resolve();
    });
  }
}
