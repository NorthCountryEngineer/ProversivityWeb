import React, { useState } from 'react'
import { TextField, Button } from '@mui/material';
import { API } from 'aws-amplify';

export const HomeCustomerConversation = () => {
  const [message, setMessage] = useState(''); // State to store the user's message

  const handleTextChange = (event) => {
    setMessage(event.target.value); // Update the message state when the user types
  }

  const handleSubmit = async () => {
    // Call the API when the user clicks the submit button
    const apiName = 'NceConversationContextManagementService'; // Replace with your API name
    const path = '/conversation/{conversationID}'; // Replace {conversationID} with the actual conversation ID
    const body = { message }; // The message to be sent to the API

    try {
      await API.post(apiName, path, { body });
      setMessage(''); // Clear the message state after successfully sending the message
    } catch (error) {
      console.error('Error sending message: ', error);
    }
  }

  return (
    <>
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
    </>
  )
}