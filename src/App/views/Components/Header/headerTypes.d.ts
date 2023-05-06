import { AuthenticatedState } from "../../../App.hooks";

export interface MenuItemProps {
    href: string;
    label: string;
    icon: React.ReactNode;
}

export type HeaderProps = {
  dynamicTitle: string;
  font: string;
  drawerWidth: number;
  menuItems: MenuItem[];
};

export type ProversivityAppBarProps = {
  isAuthenticated: boolean;
}