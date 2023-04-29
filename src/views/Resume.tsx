import { useEffect, useState } from 'react'
import Overview from '../components/ResumeComponents/EditView/Overview'
import Experience from '../components/ResumeComponents/EditView/Experience'
import Paper from '@mui/material/Paper'
import { Box, Grid, Modal } from '@mui/material'
import Divider from '@mui/material/Divider';
import { API, graphqlOperation } from 'aws-amplify'
import { getResume } from '../graphql/queries'
import CircularProgress from '@mui/material/CircularProgress';
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import { ResumeTemplate } from '../models/Service/ResumeModel'
import EditHeader from '../components/ResumeComponents/Edit/EditViews/Personal'
import EditOverview from '../components/ResumeComponents/Edit/EditViews/Overview'
import { Cache } from 'aws-amplify';
import PersonalDataComponent from '../components/ResumeComponents/EditView/PersonalData'

export default function Resume(){
    const [loading, updateLoading] = useState<Boolean>(false)
    const [resumeData, updateResume] = useState<any>(ResumeTemplate)
    const [editHeaderModalOpen, updateEditHeaderModalOpen] = useState<boolean>(false)
    const [editOverviewModalOpen, updateEditOverviewModalOpen] = useState<boolean>(false)

    useEffect(()=>{
        ReloadResume()
    },[])

    const handlePersonalDataModalClose = () => {
        updateEditHeaderModalOpen(false);
        ReloadResume()
    }

    const handleOverviewModalClose = () => {
        updateEditOverviewModalOpen(false);
        ReloadResume()
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 2,
        p: 2,
      };

    const overviewstyle = {
        position: 'absolute' as 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1100,
        bgcolor: "white",
        border: '2px solid #000',
        boxShadow: 2,
        p: 2,
    };

    function handlePersonalDataModalOpen() {
        updateEditHeaderModalOpen(true)
    }

    function handleOverviewDataModalOpen() {
        updateEditOverviewModalOpen(true)
    }

    async function handleUpdateLoading(){
        new Promise( resolve => setTimeout(resolve, 400))
        .then(()=>updateLoading(false))
    }

    async function ReloadResume(){
        updateLoading(true)
        let temporaryResume:any = await Cache.getItem('resume')
        console.log(temporaryResume.temporaryResume.data)
        try{
            if(temporaryResume){
                updateResume(temporaryResume.temporaryResume.data.getResume)
                console.log("Reload Resume called. Resume data in Resume.tsx: ", resumeData)
                handleUpdateLoading()
                if(resumeData.PersonalData===null) alert("Personal data didn't load")
            }else{
                throw new Error("No resume presented in cache");
            }
        }catch(error){
            console.error("Error with temporary resume in resume.tsx: ", error)
            handleUpdateLoading()
        }
    }

    return(
        <div>
            <Grid container spacing={0}>
                <Grid item xs={11}></Grid>
                <Grid item xs={1} alignItems="end">
                    {loading ? <CircularProgress size={20} /> : <CloudDoneIcon color="success" fontSize="medium"/> } 
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" >
                    <Paper sx={{width: '95%'}}>
                        <PersonalDataComponent editModal={handlePersonalDataModalOpen}/>
                        <Divider variant="middle" />
                        <Overview editModal={handleOverviewDataModalOpen}/>
                        <Divider variant="middle" />
                        <Experience />
                    </Paper>
                </Grid>
            </Grid>
            <Modal open={editHeaderModalOpen} onClose={handlePersonalDataModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>  <EditHeader /> </Box>
            </Modal>
            <Modal open={editOverviewModalOpen} onClose={handleOverviewModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={overviewstyle}>  <EditOverview /> </Box>
            </Modal>
        </div>
    )
}

//