import { MenuItem, NavigationLInk } from './navigation.model';

export interface NavigationSchemaProvider {
  getSchema(): MenuItem[];
}

export const PrivateChats: NavigationLInk = {
  name: 'APP.SIDEBAR.PRIVATE_CHATS.LABEL',
  iconName: 'Private chats navigation link',
  iconPath: './assets/img/private-users.svg',
  id: 'private-chats',
  inDevelopment: true,
};

export const AllChats: NavigationLInk = {
  name: 'APP.SIDEBAR.ALL_CHATS.LABEL',
  iconName: 'All chats navigation link',
  iconPath: './assets/img/all-chats.svg',
  id: 'all-chats',
};

export const EditSidebar: NavigationLInk = {
  name: 'APP.SIDEBAR.EDIT.LABEL',
  iconName: 'Edit folders link',
  iconPath: './assets/img/filters.svg',
  id: 'edit',
  inDevelopment: true,
};
