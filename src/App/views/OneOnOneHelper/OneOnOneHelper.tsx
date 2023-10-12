import React, { useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "@mui/material";
import {OneOnOneSignUpDialogueComponent, WelcomeDialogue} from './components'
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
          {switchBoard.isUser 
            ? 
              (
                <div data-testid="welcome-existing-user-dialogue">
                  <WelcomeDialogue userMetaData={userMetaData} />
                </div>
              ) : (
                <div>
                  <h2>You aren't signed up yet</h2>
                  <Button 
                    onClick={()=>setSignupDialogueOpen(true)}
                    data-testid="sign-up-dialogue-toggle-button"
                  >
                    Click here to Sign up
                  </Button>
                  
                </div>
              )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <OneOnOneSignUpDialogueComponent 
        open = {signupDialogueOpen}
        setOpen = {setSignupDialogueOpen}
        userMetaData={userMetaData}
        setUserMetaData={setUserMetaData}
        setUserData= {setUserData}
      />
    </div>
  )
  
}

export default withAuthenticator(OneOnOneHelper)
