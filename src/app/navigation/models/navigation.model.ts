export interface NavigationLInk {
  name: string;
  iconName: string;
  id: string;
  inDevelopment?: boolean;
}

export interface MenuItem {
  link: NavigationLInk;
}
