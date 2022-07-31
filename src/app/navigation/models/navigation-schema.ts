import { MenuItem, NavigationLInk } from './navigation';
import { Subject } from 'rxjs';

export interface NavigationSchemaProvider {
  getSchema(): MenuItem[];

  reinitializeNavigation$: Subject<MenuItem[]>;
}

export const PrivateChats: NavigationLInk = {
  name: 'APP.SIDEBAR.PRIVATE_CHATS.LABEL',
  iconName: './assets/img/users-avatar.png',
  id: 'private-chats',
  inDevelopment: true,
};

export const AllChats: NavigationLInk = {
  name: 'APP.SIDEBAR.ALL_CHATS.LABEL',
  iconName: './assets/img/users-avatar.png',
  id: 'all-chats',
};

export const EditSidebar: NavigationLInk = {
  name: 'APP.SIDEBAR.EDIT.LABEL',
  iconName: '',
  id: 'edit',
  inDevelopment: true,
};