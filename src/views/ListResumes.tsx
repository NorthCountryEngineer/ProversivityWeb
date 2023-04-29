import { useEffect, useState } from 'react'
import { API, Cache, graphqlOperation } from 'aws-amplify'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { CreateNewResumeModal } from '../components/ResumeComponents/Edit/Modals/CreateNewResumeModal';
import { DataGrid, GridCloseIcon, GridColDef } from '@mui/x-data-grid';
import { alpha, Button, ButtonGroup, CSSObject, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, styled, Theme, Toolbar, Typography, useTheme } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { deleteResumeByID, listResumesCallWithHook } from '../components/ResumeComponents/Edit/Functions/HandleListResumes';
import { handleTitleUpdate } from '../functions/Service/DynamicTitling';
import CreateResume from './CreateResume';
import { Main } from '../components/ResumeComponents/Edit/Components/ListFilesComponents';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import ReactQuill, { Quill } from 'react-quill';
import Resume from './Resume'
import 'react-quill/dist/quill.snow.css';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { Fab } from '@mui/material'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings'
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import { getResume } from '../graphql/queries';
import { withAuthenticator } from '@aws-amplify/ui-react';


interface ResumeInterface {
    id:String
    title:String
    actions:any
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  let formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));


  const drawerWidth = 240;


function ListResumes(){
    const [loading, setLoading] = useState(false) //to be used with any resume loading event
    const [errorState, setErrorState] = useState(false) //to be used with any resume error event
    const [modalOpen, setModalOpenStatus] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(true)
    const [tableData, updateTableData] = useState<ResumeInterface[]>([{id:"",title:"", actions:""}])
    const [currentResume, updateCurrentResume] = useState<String>()
    
    let DarkMode:Boolean

    const openModal = () => { setModalOpenStatus(!modalOpen) }

    useEffect(()=>{
        handleTitleUpdate('Resume Management Service')
        listResumesCallWithHook(updateTableData)
        DarkMode = Cache.getItem('DarkMode');
    },[]) 

    async function handleUpdateCurrentResume(ResumeID:string){
        console.log("Resume opened")
        setDrawerOpen(!drawerOpen)
        let temporaryResume:any = await API.graphql(graphqlOperation(getResume, {id: ResumeID}))
        Cache.setItem('resume', {temporaryResume}, { priority: 1 });
    }

    function ResumeView(){
        return(
            <>
            <Stack direction="row">
                <Box sx={{width:"200px"}}>
                </Box>
                <Box>
                    <Button> 
                        <CancelIcon onClick={()=>{
                            updateCurrentResume("")
                            setDrawerOpen(true)
                        }}/> 
                    </Button>

                    <Resume />
                </Box>
            </Stack> 
            </>
        )
    }
      
    const columns: GridColDef[] = [
    { 
        field: 'title', 
        headerName: 'Resume Title', 
        width: 200
    },
    {
        field: "actions",
        headerName: "Resume Actions",
        width: 125,
        renderCell: (cellValues) => {
            return (
                <>
                <IconButton 
                    color="primary" 
                    aria-label="Edit Resume" 
                    component="label"
                    onClick={() => {
                        handleUpdateCurrentResume(cellValues.row.id)
                    }}
                >
                    <CreateIcon />
                </IconButton>
                <IconButton 
                    color="primary" 
                    aria-label="Delete Resume" 
                    component="label"
                    onClick={() => {
                        deleteResumeByID(cellValues.row.id, updateTableData,updateCurrentResume)
                    }}
                >
                    <DeleteIcon />
                </IconButton>
                <IconButton 
                    color="primary" 
                    aria-label="Edit Resume" 
                    component="label"
                    onClick={() => {
                        console.log(cellValues.row)
                    }}
                >
                    <OpenInNewIcon />
                </IconButton>

                </>
            );
        }
        }
    ];

    return(
        <>
            <CreateNewResumeModal 
                setOpen={openModal} 
                isOpen={modalOpen} 
                setter={updateTableData}
                updateCurrentResume={updateCurrentResume}
            />
        
            <Drawer
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                elevation={0}
                hideBackdrop={false}
                PaperProps={{
                    sx: {
                        backgroundColor:  'transparent',
                        width: 350,
                        borderColor: alpha('rgb(255,255,255)', 0.1),
                        pt: 0
                        
                    },
                }}
            >
                <Toolbar sx={{height:125}}/>

                <DataGrid 
                    autoHeight 
                    rows={tableData}  
                    columns={columns}  
                    headerHeight={0} 
                    hideFooter 
                />

                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <ListItem key="NewResume" disablePadding>
                            <ListItemButton onClick={()=>setModalOpenStatus(true)}>
                                <ListItemIcon>
                                    <NoteAddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Create New Resume" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                    
            </Drawer>
            <Box component="main" sx={{
                flexGrow: 1, 
                p: 0,
                marginLeft: drawerOpen ? 45 : 0
            }}>
            <Box component="main" sx={{ backgroundColor: "transparent", flexGrow: 1, p: 1.5 }}>
                {
                    drawerOpen ?
                        currentResume?
                            <>
                                <ResumeView />
                            </>
                            :
                            <div style={{background:"transparent"}}>
                                
                            </div>
                        :
                        <>
                            <Drawer
                                variant="persistent"
                                anchor="left"
                                open={!drawerOpen}
                                elevation={0}
                                hideBackdrop={false}
                                PaperProps={{
                                    sx: {
                                    backgroundColor:  alpha('rgb(0,0,0)', 1),
                                    width: 40,
                                    borderColor: alpha('rgb(255,255,255)', 0.1),
                                    },
                                }}
                            >
                                <Toolbar />
                                <IconButton 
                                    color="secondary" 
                                    aria-label="Open drawer"
                                    onClick={()=>setDrawerOpen(true)}
                                >
                                    <ChevronRight />
                                </IconButton>

                            </Drawer>
                            <ResumeView />
                        </>
                }
            </Box>
        </Box>
        </>
    )
}

export default withAuthenticator(ListResumes)