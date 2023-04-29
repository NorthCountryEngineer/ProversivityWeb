import { API, graphqlOperation, Hub } from "aws-amplify"
import { listUserPreferences } from "../../graphql/queries"
import { updateUserPreferences } from "../../graphql/mutations"
import { createUserPreferences } from "../../graphql/mutations"
import { LicenseInfo } from '@mui/x-license-pro';
import { listUIKeys } from '../../graphql/queries'
import { randomInteger } from "../Service/HelperFunctions";

export async function checkuserPreferencesOnLoad(
  setUserAttributesLoaded:any, 
  updateTargetImage:any
){
  let userPreferences:any
  let MUITokens:any
  let createUserPreferences:any

  updateTargetImage(randomInteger(1,9))

  try{
    userPreferences = await API.graphql(graphqlOperation(listUserPreferences))
    MUITokens = await API.graphql(graphqlOperation(listUIKeys))
    LicenseInfo.setLicenseKey(MUITokens.data.listUIKeys.items[0].MuiKey)
  }catch(error){
    console.error("Error calling amplify APIs or setting MUI License Key: ", error)
  }

  try{
    if(userPreferences.data.listUserPreferences.items.length===0){
        createUserPreferences = await API.graphql(graphqlOperation(createUserPreferences, {input: {DarkMode: false, DisplayName: "", User: ""}}))
        Hub.dispatch('NewAttributesAssignment', { event: 'User preferences not found, initial attributes', data: {createUserPreferences}, message: ''})
    }else{
      Hub.dispatch('AttributesUpdate', { event: 'Initial attributes load', data: {userPreferences}, message:'' });
    }
  } catch (err) { 
    console.log('Error reading or writing user preferences ',err) 
  }
  setUserAttributesLoaded(true)
}