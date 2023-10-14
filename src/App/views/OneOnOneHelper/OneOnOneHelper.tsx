import React, { useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "@mui/material";
import { OneOnOneAuthenticatedUserView} from './components'
import { OneOnOneHelperHooks } from "./functions";


const OneOnOneHelper = () => {

  const [signupDialogueOpen, setSignupDialogueOpen] = useState(false)
  const {
    userMetaData, 
    setUserMetaData,
    switchBoard, 
    setUserData, 
    fetchUserData,
  } = OneOnOneHelperHooks()


  useEffect(() => {
    fetchUserData()
    console.log(switchBoard)
  }, [])

  return (
    <div>
      {switchBoard.loadingComplete ? (
        <div>
          <div data-testid="welcome-existing-user-dialogue">
            <OneOnOneAuthenticatedUserView userMetaData={userMetaData} />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
  
}

export default withAuthenticator(OneOnOneHelper)
