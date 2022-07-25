import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANG } from '../constants/langs.constant';

@Injectable()
export class ApplicationInitializerService {
  constructor(private translateService: TranslateService) {}

  public init(): Promise<void> {
    this.translateService.setDefaultLang(DEFAULT_LANG);
    return new Promise<void>((resolve) => {
      resolve();
    });
  }
}
