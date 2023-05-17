import {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { Address, Contact, PersonalData, Resume, ResumeTemplate } from '../../../../../models/Service/ResumeModel'
import Autocomplete from '@mui/material/Autocomplete'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { AddressTemplate, ContactTemplate, PersonalDataTemplate } from '../../../../../models/Service/ResumeModel'
import { CircularProgress, Divider, Fade, FormControlLabel } from '@mui/material'
import { API, Cache, graphqlOperation } from 'aws-amplify'
//import {  updateAddress as updateAddressAPI, updateContact as updateContactAPI, updatePersonalData } from '../../../../../../graphql/mutations'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import { green } from '@mui/material/colors'
import CircleIcon from '@mui/icons-material/Circle'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import RedditIcon from '@mui/icons-material/Reddit'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import ErrorIcon from '@mui/icons-material/Error'

var UsaStates = require('usa-states').UsaStates
const states = new UsaStates().states.map((state:any)=>{return(state.name)})

const SocialMediaToggle = {
    Reddit: false,
    Twitter: false,
    Facebook: false,
    LinkedIn: false,
    Github: false,
}

export default function EditHeader() {
    const [baseData,updateBaseData] = useState<PersonalData>(PersonalDataTemplate)
    const [address, updateAddress] = useState<Address>(AddressTemplate)
    const [contact, updateContact] = useState<Contact>(ContactTemplate)
    const [smToggle, updateSmToggle] = useState(SocialMediaToggle)
    const [errorState, updateErrorState] = useState(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [resume, setResume] = useState<Resume>(ResumeTemplate)
    
    useEffect(()=>{
        let cachedResume = Cache.getItem('resume')
        console.log("Cached Resume: ", cachedResume.temporaryResume.data.getResume)
        let {Address,Contact,...BaseData}:any = cachedResume.temporaryResume.data.getResume.PersonalData
        updateAddress(Address)
        updateContact(Contact)
        updateBaseData(BaseData)
        let {SharePool, createdAt, id, owner, resumeSharePoolId, updatedAt, ...remainingResume} = cachedResume.temporaryResume.data.getResume
        console.log(remainingResume, resume)
        setResume(remainingResume)
    },[])

    const saveAddressData = async() =>{
        setLoading(true)
        let addressUpdate: any = {}
        try{
            let {createdAt, updatedAt, owner, ...Address}:any = address
            let addressInput = { id: baseData.personalDataAddressId, ...Address}
            addressUpdate = {}////await API.graphql(graphqlOperation(updateAddressAPI, {input: addressInput}))
        }catch(error){
            updateErrorState(true)
            console.error("Error updating address: ", error, "Attempted request: ", {id: baseData.personalDataAddressId, ...address})
        }
        setLoading(false)
    }

    const saveContactData = async() =>{
        setLoading(true)
        let contactUpdate: any = {}
        try{
            let {createdAt, updatedAt, owner, ...Contact}:any = contact
            let contactInput = {id: baseData.personalDataContactId, ...Contact }
            contactUpdate = {}//await API.graphql(graphqlOperation(updateContactAPI, { input: contactInput }))
            setLoading(false)
        }catch(error){
            updateErrorState(true)
            console.error("Error with updating contact: ", error, "Attempted request: ", {id: baseData.personalDataContactId, ...contact })
        }
    }

    const saveBaseData = async() =>{
        setLoading(true)
        let resumeUpdate: any = {}
        try{
            const {Address, Contact, owner, personalDataAddressId, personalDataContactId, updatedAt, createdAt, ...resumeCallData}:any = baseData
            resumeUpdate = {}//await API.graphql(graphqlOperation(updatePersonalData, { input: resumeCallData } ))
            console.log("Resume Update: ", resumeUpdate)
            setLoading(false)
        } catch(error){
            updateErrorState(true)
            console.error("Error with resume update: ", error, "Attempted request: ", {...baseData})
        }
    }
      
    return(
        <div>
            <Grid container spacing={2} >
                <Grid item xs={3.5}>
                    <TextField size="small" required fullWidth id="FirstName" label="First Name" variant="outlined" onChange={e=>{updateBaseData({...baseData,First: e.target.value })}} onBlur={() => saveBaseData()} value={baseData.First}/>
                </Grid>

                <Grid item xs={3}>
                    <TextField size="small" fullWidth id="MiddleName" label="Middle Name" variant="outlined" onChange={e=>updateBaseData({...baseData,Middle: e.target.value })} onBlur={() => saveBaseData()} value={baseData.Middle} />
                </Grid>

                <Grid item xs={3.5}>
                    <TextField size="small" required fullWidth id="LastName" label="Last Name" variant="outlined" onChange={e=>updateBaseData({...baseData,Last: e.target.value })} onBlur={() => saveBaseData()} value={baseData.Last} />
                </Grid>

                <Grid item xs={2}>
                    <TextField size="small" id="Acronyms" label="Acronyms" variant="outlined" onChange={e=>updateBaseData({...baseData,Acronyms: e.target.value })} onBlur={() => saveBaseData()} value={baseData.Acronyms} />
                </Grid>

                <Grid item xs={8}>
                    <TextField size="small" required fullWidth id="City" label="City" variant="outlined" onChange={e => updateAddress({...address, City: e.target.value})} onBlur={() => saveAddressData()} value={address.City} />
                </Grid>

                <Grid item xs={4}>
                    <Autocomplete
                        freeSolo
                        size="small" 
                        aria-required
                        disablePortal
                        id="combo-box-demo"
                        options={states}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="State" />}
                        onChange={(_event:any,data: any)=> {updateAddress({...address, State: data })}}
                        onBlur={() => saveAddressData()}
                        value={address.State}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField size="small" fullWidth id="Email" label="Email" onChange={(event)=>{updateContact({...contact,email: event.target.value })}}onBlur={() => saveContactData()}value={contact.email} />
                </Grid>

                <Grid item xs={12}>
                    <TextField size="small" fullWidth id="Phone" label="Phone" variant="outlined" onChange={(event)=>{ updateContact({ ...contact, phone: event.target.value }) }} onBlur={() => saveContactData()} value={contact.phone}  />
                </Grid>

                <Grid item xs={12}>
                    <TextField size="small" fullWidth id="JobTitle" label="Job Title" variant="outlined" onChange={(event)=>{updateBaseData({...baseData, JobTitle: event.target.value})}} onBlur={() => saveBaseData()} value={baseData.JobTitle}  />
                </Grid>
                
                <Grid item xs={12}>
                    <Stack 
                        direction="row" 
                        spacing={3} 
                        justifyContent="center"
                        alignItems="center"
                    >
                        <FormControlLabel
                            control={
                                <Button
                                    onClick={
                                        ()=>{updateSmToggle(smToggle=>({
                                            ...smToggle,
                                            LinkedIn: !smToggle.LinkedIn
                                        }))}
                                    } 
                                    endIcon={
                                        baseData.LinkedIn ?
                                            <CheckCircleIcon color={ smToggle.LinkedIn ? "secondary" : "action"} />
                                        :
                                            <CircleIcon color={ smToggle.LinkedIn ? "secondary" : "action"} />
                                    }
                                >
                                    <LinkedInIcon color={ smToggle.LinkedIn ? "secondary" : "action"}/>
                                </Button>
                            }
                            label=""
                        />
                        
                        <FormControlLabel
                            control={
                                <Button
                                    onClick={
                                        ()=>{updateSmToggle(smToggle=>({
                                            ...smToggle,
                                            Facebook: !smToggle.Facebook
                                        }))}
                                    } 
                                    endIcon={
                                        baseData.Facebook ?
                                            <CheckCircleIcon color={ smToggle.Facebook ? "secondary" : "action"} />
                                        :
                                            <CircleIcon color={ smToggle.Facebook ? "secondary" : "action"} />
                                    }
                                >
                                    <FacebookIcon color={ smToggle.Facebook ? "secondary" : "action"} />
                                </Button>
                            }
                            label=""
                        />
                        <FormControlLabel
                            control={
                                <Button
                                    onClick={
                                        ()=>{updateSmToggle(smToggle=>({
                                            ...smToggle,
                                            Github: !smToggle.Github
                                        }))}
                                    } 
                                    endIcon={
                                        baseData.Github ?
                                            <CheckCircleIcon color={ smToggle.Github ? "secondary" : "action"} />
                                        :
                                            <CircleIcon color={ smToggle.Github ? "secondary" : "action"} />
                                    }
                                >
                                    <GitHubIcon color={ smToggle.Github ? "secondary" : "action"} />
                                </Button>
                            }
                            label=""
                        />
                        <FormControlLabel
                            control={
                                <Button
                                    onClick={
                                        ()=>{updateSmToggle(smToggle=>({
                                            ...smToggle,
                                            Reddit: !smToggle.Reddit
                                        }))}
                                    } 
                                    endIcon={
                                        baseData.Reddit ?
                                            <CheckCircleIcon color={ smToggle.Reddit ? "secondary" : "action"}/>
                                        :
                                            <CircleIcon color={ smToggle.Reddit ? "secondary" : "action"} />
                                    }
                                >
                                    <RedditIcon color={ smToggle.Reddit ? "secondary" : "action"} /> 
                                </Button>
                            }
                            label=""
                        />
                        <FormControlLabel
                            control={
                                <Button
                                    onClick={
                                        ()=>{updateSmToggle(smToggle=>({
                                            ...smToggle,
                                            Twitter: !smToggle.Twitter
                                        }))}
                                    } 
                                    endIcon={
                                        baseData.Twitter ?
                                            <CheckCircleIcon color={ smToggle.Twitter? "secondary" : "action"} />
                                        :
                                            <CircleIcon color={ smToggle.Twitter? "secondary" : "action"} />
                                    }
                                >
                                    <TwitterIcon color={ smToggle.Twitter? "secondary" : "action"} />
                                </Button>
                            }
                            label=""
                        />
                    </Stack>
                </Grid>

                {smToggle.LinkedIn && <Fade in={smToggle.LinkedIn}>
                    <Grid item xs={12}>
                        <TextField size="small" fullWidth id="LinkedIn" label="LinkedIn URL" variant="outlined" onChange={(event)=>{
                            updateBaseData(baseData => ({
                                ...baseData,
                                LinkedIn: event.target.value
                            }))
                        }}
                        onBlur={() => saveBaseData()}
                        value={baseData.LinkedIn}  />
                    </Grid>
                </Fade> }
                {smToggle.Facebook &&<Fade in={smToggle.Facebook}>
                    <Grid item xs={12}>
                        <TextField size="small" fullWidth id="Facebook" label="Facebook URL" variant="outlined" onChange={(event)=>{
                            updateBaseData(input => ({
                                ...input,
                                Facebook: event.target.value
                            }))
                        }}
                        onBlur={() => saveBaseData()}
                        value={baseData.Facebook}  />
                    </Grid>
                </Fade>}
                {smToggle.Github &&<Fade in={smToggle.Github}>
                    <Grid item xs={12}>
                        <TextField size="small" fullWidth id="Github" label="Github URL" variant="outlined" onChange={(event)=>{
                            updateBaseData(input => ({
                                ...input,
                                Github: event.target.value
                            }))
                        }}
                        onBlur={() => saveBaseData()}
                        value={baseData.Github}  />
                    </Grid>
                </Fade>}
                {smToggle.Reddit &&<Fade in={smToggle.Reddit}>
                    <Grid item xs={12}>
                        <TextField size="small" fullWidth id="Reddit" label="Reddit URL" variant="outlined" onChange={(event)=>{
                            updateBaseData(input => ({
                                ...input,
                                Reddit: event.target.value
                            }))
                        }}
                        onBlur={() => saveBaseData()}
                        value={baseData.Reddit}  />
                    </Grid>
                </Fade>}
                {smToggle.Twitter &&<Fade in={smToggle.Twitter}>
                    <Grid item xs={12}>
                        <TextField size="small" fullWidth id="Twitter" label="Twitter URL" variant="outlined" onChange={(event)=>{
                            updateBaseData(input => ({
                                ...input,
                                Twitter: event.target.value
                            }))
                        }}
                        onBlur={() => saveBaseData()}
                        value={baseData.Twitter}  />
                    </Grid>
                </Fade>}
                
                <Grid item xs={12}>
                    <Divider variant="middle">
                    { 
                        loading 
                        ? 
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: green[500],
                                }}
                            /> 
                        : 
                            errorState ? 
                                <ErrorIcon color="error" />
                                :
                                <CloudDoneIcon
                                    sx={{
                                        color: green[500],
                                    }}
                                /> 
                     }
                     </Divider>
                </Grid>
            </Grid>
        </div>
    )
}