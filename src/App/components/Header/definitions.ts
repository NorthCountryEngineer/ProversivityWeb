export interface MenuItemProps {
    href: string
    label: string
    icon: React.ReactNode
}

export type HeaderProps = {
  dynamicTitle: string
  font: string
  drawerWidth: number
  menuItems: MenuItemProps[]
}

export type ProversivityAppBarProps = {
  isAuthenticated: boolean
}