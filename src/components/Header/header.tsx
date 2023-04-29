import { useDrawerFab, useTitleUpdate } from './headerHooks';
import { Sidebar, UserManagementFab, ProversivityAppBar, menuItems } from './headerComponents';
import { drawerWidth } from '../../config/UI/UIComponentSettings';
import { loadFont as SourceCodePro } from "@remotion/google-fonts/Farro";
import {Box} from '@mui/material';

const SourceCodeProFont = SourceCodePro().fontFamily

export function Header() {

    const { 
        drawerOpen, 
        drawerFabHidden, 
        toggleDrawer
    } = useDrawerFab();

    const dynamicTitle = useTitleUpdate("Engineering the North Country"); 
    
    return (
        <>
            <UserManagementFab 
                drawerFabHidden = {drawerFabHidden}
                handleDrawerOpen = {() => toggleDrawer()}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <ProversivityAppBar dynamicTitle={dynamicTitle} font={SourceCodeProFont} />

                <Sidebar
                    drawerWidth={drawerWidth}
                    drawerOpen={drawerOpen}
                    toggleDrawer={toggleDrawer}
                    font={SourceCodeProFont}
                    menuItems={menuItems}
                /> 
            </Box>
        </>
    );
}