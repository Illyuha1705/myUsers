export interface NavigationLInk {
  name: string;
  iconName: string;
  iconPath: string;
  id: string;
  inDevelopment?: boolean;
}

export interface MenuItem {
  link: NavigationLInk;
}
