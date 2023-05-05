import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import Grid  from '@mui/material/Grid';
import Stack from '@mui/material/Stack'
import { createResume } from '../../../../../../graphql/mutations';
import { API,Auth } from 'aws-amplify';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { listResumesCallWithHook } from '../Functions/HandleListResumes';
import { CreateNewResumeAPICalls } from '../Functions/CreateNewResume';
import { LinearProgress } from '@mui/material';

type Props = {
    setOpen?: any;
    isOpen?: any;
    setter?: any;
    updateCurrentResume?: any;
};

type ResumeInput = {
    Author: string,
    Title: string,
    Status: string
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export function CreateNewResumeModal({setOpen,isOpen,setter,updateCurrentResume}:Props){
    const [progress, setProgress] = useState(0);
    const [currentLoadStatus, setCurrentLoadStatus] = useState<String>("")
    
    let NewResume:ResumeInput = {
        Author: "",
        Title: "",
        Status: "DRAFT"
    }

    function handleProgressBar(progressInteger:number, inputMessage?:String){
        setProgress(Math.round(progressInteger))
        inputMessage && setCurrentLoadStatus(inputMessage)
    }

    async function CreateNewResume(){
        let currentUser = await Auth.currentAuthenticatedUser()
        NewResume.Author = currentUser.username
        let createNewResume:any

        try{
            createNewResume = await CreateNewResumeAPICalls(NewResume,handleProgressBar)
        }catch(error){
            console.error(error)
        }

        if(createNewResume){
            updateCurrentResume(createNewResume)
            setOpen(false)
            listResumesCallWithHook(setter)
        }

    }

    function updateTitleFunction(title:string){
        NewResume.Title = title
    }

    return(
        <div>
            <Modal
                open={isOpen}
                onClose={()=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5">
                                Create New Resume
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Title"
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '100%' }}
                                onChange={(event)=>{updateTitleFunction(event.target.value)}}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" onClick={()=>CreateNewResume()}>Create</Button>
                                <Button variant="outlined" onClick={()=>setOpen(false)}>Cancel</Button>
                            </Stack>
                        </Grid>

                        <Grid item xs={12}>
                            <LinearProgress variant="determinate" value={progress} />
                            {currentLoadStatus}
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}