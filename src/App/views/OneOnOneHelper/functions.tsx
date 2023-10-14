import { API, Auth, graphqlOperation } from "aws-amplify"
import { listUsers } from "../../../graphql/queries"
import { useEffect, useState } from "react"
import { initialSwitchBoardData, initialUserMetaData } from "./model.d"
import { createUser, deleteUser } from "../../../graphql/mutations"

export function OneOnOneHelperHooks():{
  userMetaData: typeof initialUserMetaData
  setUserMetaData: React.Dispatch<React.SetStateAction<typeof initialUserMetaData>>
  switchBoard: typeof initialSwitchBoardData
  setSwitchBoard: React.Dispatch<React.SetStateAction<typeof initialSwitchBoardData>>
  setUserData: (key: string, value: any) => void
  setSwitchData: (key: string, value: any) => void
  fetchUserData: () => Promise<void>
  switchFields: (selection: number, setSwitchBoard: React.Dispatch<React.SetStateAction<typeof initialSwitchBoardData>>) => void
} {
    const [userMetaData, setUserMetaData] = useState(initialUserMetaData)
    const [switchBoard, setSwitchBoard] = useState(initialSwitchBoardData)

    function switchFields(selection:number, setSwitchBoard:any){
        if(selection === 1){
            setSwitchBoard({
                ...switchBoard, 
                "existingOrganizationFieldOpen":false, 
                "newOrganizationFieldOpen": true
            })
        }
    
        if(selection === 2){
            setSwitchBoard({
                ...switchBoard,
                "existingOrganizationFieldOpen": true,
                "newOrganizationFieldOpen": false
            })
        }
    }


      
      // Define a generic setter function for userMetaData and switchBoard
    const setUserData = (key, value) => {
        try{
            setUserMetaData({ ...userMetaData, [key]: value })
            return("Done")
        }catch(error){
            console.error(error)
            return(error)
        }
    }

    const setSwitchData = (key, value) => {
        setSwitchBoard({ ...switchBoard, [key]: value })
    }

    const fetchUserData = async () => {
      try {
          let tempSwitchBoard = { ...switchBoard };
          let tempUserMetaData = { ...userMetaData };
  
          const currentUser = await Auth.currentAuthenticatedUser();
  

          console.log(currentUser)
          // Fetch user data and update tempUserMetaData
          await fetchUserAttributes(currentUser, tempUserMetaData);
  
          // Check if the user exists in your system
          if (await doesUserExist(tempUserMetaData.email)) {
              tempSwitchBoard.isUser = true;
              tempSwitchBoard.loadingComplete = true;
          } else {
              // Create the user if they don't exist
              await createUserIfNotExists(tempUserMetaData);
              tempSwitchBoard.loadingComplete = true;
          }
  
          // Update the state once after all changes are made
          setSwitchBoard(tempSwitchBoard);
          setUserMetaData(tempUserMetaData);
      } catch (error) {
          setSwitchBoard({ ...switchBoard, loadingComplete: true });
          console.error("Error fetching user data:", error);
      }
  }


    const fetchUserAttributes = async (currentUser, tempUserMetaData) => {
      tempUserMetaData.email = currentUser.attributes.email
      tempUserMetaData.firstName = currentUser.attributes.name
    }
    
    const doesUserExist = async (email) => {
      const variables = {
          filter: { email: { eq: email } },
          limit: 1,
      }
  
      const listUsersCall:any = await API.graphql(graphqlOperation(listUsers, variables))
      return listUsersCall.data.listUsers.items.length > 0
    }
    
    const createUserIfNotExists = async (tempUserMetaData) => {
      try {
          await API.graphql({
              query: createUser,
              variables: {
                  input: {
                      firstName: tempUserMetaData.firstName,
                      email: tempUserMetaData.email,
                      role: userMetaData.role,
                  },
              },
          })
      } catch (error) {
          console.error('Error creating user:', error)
      }
    }


      
  
    return {
        userMetaData, 
        setUserMetaData,
        switchBoard, 
        setSwitchBoard,
        setUserData, 
        setSwitchData, 
        fetchUserData,
        switchFields
    }
}

export  async function retrieveUserEmail(){
  const currentUser:any = await Auth.currentAuthenticatedUser()
  return currentUser.attributes.email
}

async function getUserID(userEmail){
  const currentUser:any = await API.graphql(graphqlOperation(listUsers, { filter: { email: { eq: userEmail } } }))
  console.log(currentUser.data.listUsers.items[0].id)
  return currentUser.data.listUsers.items[0].id
}

async function deleteUserByID(userID){
  const deleteUserCall = await API.graphql(graphqlOperation(deleteUser, { input: { id: userID } }))
  return(deleteUserCall)
}

export async function deleteUserAccount(){
  const userEmail = "eric.p.yager@gmail.com"
  try{
    const userID = await getUserID(userEmail)
    const deleteUserCall = await deleteUserByID(userID)
    if(deleteUserCall) window.location.reload()
    return(deleteUserCall)
  }
  catch(error){
    console.error(error)
    return(error)
  }
}
