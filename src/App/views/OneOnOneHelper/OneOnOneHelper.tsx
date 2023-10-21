import React, { useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "@mui/material";
import { OneOnOneAuthenticatedUserView} from './components'
import { OneOnOneHelperHooks } from "./functions";
import RelationshipCreateForm from "../../../ui-components/RelationshipCreateForm";

const OneOnOneHelper = () => {

  const {
    userMetaData, 
    switchBoard, 
    fetchUserData,
  } = OneOnOneHelperHooks()


  useEffect(() => {
    fetchUserData()
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
