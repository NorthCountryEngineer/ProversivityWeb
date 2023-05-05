export interface HeaderProps {
  DarkMode: boolean | undefined;
}

export interface MenuItemProps {
    href: string;
    label: string;
    icon: React.ReactNode;
}

export type ProversivityAppBarProps = {
  dynamicTitle: string;
  font: string;
  drawerWidth: number;
  menuItems: MenuItem[];
};