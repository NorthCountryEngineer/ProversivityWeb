import { API, Auth, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../../graphql/queries";
import { useState } from "react";
import { initialSwitchBoardData, initialUserMetaData } from "./model.d";
import { createUser } from "../../../graphql/mutations";

export function OneOnOneHelperHooks():{
  userMetaData: typeof initialUserMetaData;
  setUserMetaData: React.Dispatch<React.SetStateAction<typeof initialUserMetaData>>;
  switchBoard: typeof initialSwitchBoardData;
  setSwitchBoard: React.Dispatch<React.SetStateAction<typeof initialSwitchBoardData>>;
  setUserData: (key: string, value: any) => void;
  setSwitchData: (key: string, value: any) => void;
  fetchUserData: () => Promise<void>;
  switchFields: (selection: number, setSwitchBoard: React.Dispatch<React.SetStateAction<typeof initialSwitchBoardData>>) => void;
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
            setUserMetaData({ ...userMetaData, [key]: value });
            return("Done")
        }catch(error){
            console.error(error)
            return(error)
        }
    };

    const setSwitchData = (key, value) => {
        setSwitchBoard({ ...switchBoard, [key]: value });
    }

    const fetchUserData = async () => {
        try {
          const currentUser = await Auth.currentAuthenticatedUser();
          console.log(currentUser);
      
          const variables = {
            filter: { email: { eq: currentUser.attributes.email } },
            limit: 1,
          };
      
          const listUsersCall:any = await API.graphql(graphqlOperation(listUsers, variables));
          console.log("list users call: ", listUsersCall);
      
          // Use a temporary variable to update state in a batch
          let tempSwitchBoard = { ...switchBoard };
          let tempUserMetaData = { ...userMetaData };
      
          tempUserMetaData.email = currentUser.attributes.email;
          tempUserMetaData.firstName = currentUser.attributes.name;
          tempUserMetaData.lastName = currentUser.attributes.name;
      
          if (listUsersCall.data.listUsers.items.length > 0) {
            tempSwitchBoard.isUser = true;
            tempSwitchBoard.loadingComplete = true;
          } else {
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