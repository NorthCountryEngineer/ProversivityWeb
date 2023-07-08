import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { API, Auth } from 'aws-amplify';

export const HomeCustomerConversation = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the user's access token
        const currentSession = await Auth.currentSession();
        const accessToken = currentSession.getAccessToken().getJwtToken();
        console.log(accessToken)

        // Make the API request with the user's access token
        const response = await API.get('NceConversationContextManagementService', '/', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          body: {
            conversationID:"test-conversation-id3",
          }
        });

        console.log(response); // Access the "test" attribute in the response
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return <></>;
};


/*export const HomeCustomerConversation = () => {
  const [message, setMessage] = useState(''); 
  const [conversationID, setConversationID] = useState(null);

  useEffect(() => {
    const createNewConversation = async () => {
      const apiName = 'NceConversationContextManagementService';
      const path = '/conversation/new';

      try {
        const myInit = {
          headers: {
            Authorization: `Bearer ${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`
          }
        }

        const response = await API.post(apiName, path, myInit);
        setConversationID(response.conversationID);
      } catch (error) {
        console.error('Error creating new conversation: ', error);
      }
    };

    createNewConversation();
  }, []); 

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = async () => {
    if (!conversationID) {
      return;
    }

    const apiName = 'NceConversationContextManagementService';
    const path = `/conversation/${conversationID}`;
    const session = await Auth.currentSession();
    const token = session.getIdToken().getJwtToken();

    const init = {
      body: { message },
      headers: {
        Authorization: token,
      },
    };

    try {
      await API.post(apiName, path, init);
      setMessage('');
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  }

  return (
    <div style={{backgroundColor:"black"}}>
      <TextField
        value={message}
        onChange={handleTextChange}
        multiline
        rows={4}
        fullWidth
      />
      <Button onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}*/