# Header Component

This component is a top-level component that renders the header of a web application. The header contains a logo, a dynamic title, a sidebar menu, and a user management button.

## Files

- `header.tsx`: This is the main file that defines the Header component. It imports the `ProversivityAppBar` and `menuItems` from `headerComponents.tsx` and `useTitleUpdate` from `headerHooks.tsx`. It also imports the `SourceCodePro` font from `@remotion/google-fonts/Farro`.
- `headerComponents.tsx`: This file contains the presentational components and types used by the Header component. It exports `ProversivityAppBar`, `menuItems`, `Sidebar`, `UserManagementFab`, and `NorthCountryEngineerLogoAndTitle`.
- `headerTypes.ts`: This file defines the prop types used by `headerComponents.tsx`.
- `headerHooks.tsx`: This file contains hooks used by the Header component. It exports `useTitleUpdate` and `useDrawerFab`.

## Components

### ProversivityAppBar

This component renders a Material-UI AppBar with the logo and title. It accepts the following props:

- `dynamicTitle`: The dynamic title to be displayed next to the logo.
- `font`: The font to be used for the title.
- `drawerWidth`: The width of the sidebar drawer.
- `menuItems`: An array of objects representing the menu items in the sidebar.

### Sidebar

This component renders a Material-UI Drawer for the sidebar menu. It accepts the following props:

- `drawerWidth`: The width of the sidebar drawer.
- `drawerOpen`: Whether or not the sidebar drawer is open.
- `toggleDrawer`: A function to toggle the state of the sidebar drawer.
- `font`: The font to be used for the sidebar.
- `menuItems`: An array of objects representing the menu items in the sidebar.

### UserManagementFab

This component renders a Material-UI FAB button for user management. It accepts the following props:

- `drawerFabHidden`: Whether or not the FAB button is hidden.
- `handleDrawerOpen`: A function to handle the opening of a drawer.

### NorthCountryEngineerLogoAndTitle

This component renders the North Country Engineer logo and dynamic title with the specified font. It accepts the following props:

- `dynamicTitle`: The dynamic title to be displayed next to the logo.
- `font`: The font to be used for the title.

## Hooks

### useTitleUpdate

This hook returns a dynamic title that updates when the page changes.

### useDrawerFab

This hook returns a function to handle the opening of a drawer.
