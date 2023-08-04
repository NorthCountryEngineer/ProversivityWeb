import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { useMutation, useQuery } from '@tanstack/react-query';
import { GraphQLQuery } from '@aws-amplify/api';
import { listRealEstateProperties } from '../../../graphql/queries';
import { createRealEstateProperty } from '../../../graphql/mutations';


const samplePayload = { name: "My first todo", address: "Hello world!" };

export const HomeCustomerConversation = () => {
  
  const {
    data,
    isLoading,
    isSuccess,
    isError: isErrorQuery,
  } = useQuery({
    queryKey: ["realEstateProperties"],
    queryFn: async () => {
      const response:any = await API.graphql({
        query: listRealEstateProperties,
      });
  
      const allRealEstateProperties =
        response?.data?.listRealEstateProperties?.items;
  
      if (!allRealEstateProperties) return null;
  
      return allRealEstateProperties;
    },
  });

  const MakeExampleCall = async() => {
    console.log("starting")
    try{
      const createCall = await API.graphql(graphqlOperation(createRealEstateProperty, {input: samplePayload}))
      const listCall = await API.graphql(graphqlOperation(listRealEstateProperties))
      const data = {createCall, listCall}
      return data
    }
    catch(error){
      console.log(error)
    }
  }

  console.log(isLoading, isSuccess)
  const exampleCall = MakeExampleCall()
  console.log(exampleCall)

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