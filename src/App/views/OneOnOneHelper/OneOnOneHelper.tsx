import React, { useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, Auth } from "aws-amplify";
import { getUser } from "../../../graphql/queries"; // Modify path accordingly
import { Button } from "@mui/material";

const OneOnOneHelper = () => {
  const [isUser, setIsUser] = useState<any>(false)
  const [loadingComplete, setLoadingComplete] = useState(false)

  useEffect(() => {
    // Fetch user's details from Cognito
    const fetchUserData = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const userId = currentUser.attributes.sub; // Cognito user ID

        // Fetch user details using the GraphQL query
        const userData:any = await API.graphql({
          query: getUser,
          variables: { id: userId },
        })

        if(userData.data.getUser !== null){
          setIsUser(true)
        }

        console.log(userData)

        setLoadingComplete(true)

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {loadingComplete ? (
        <div>
          {isUser 
            ?
              (
                <h1>I'm a user</h1>
              )
            :
              (
                <Button onClick={()=>{console.log("I'm going to be a user!")}}>Sign up</Button>
              )
          }
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default withAuthenticator(OneOnOneHelper);
