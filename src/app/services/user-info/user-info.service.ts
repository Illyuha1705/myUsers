import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class UserInfoService {
  showUserInfoSection$: EventEmitter<void> = new EventEmitter<void>();
  showUserInfoTray$: EventEmitter<void> = new EventEmitter<void>();
}
