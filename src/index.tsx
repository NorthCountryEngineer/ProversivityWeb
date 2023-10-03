import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { API, Amplify, Auth } from 'aws-amplify'
import awsmobile from './aws-exports'
import '@aws-amplify/ui-react/styles.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LicenseInfo } from '@mui/x-license-pro';

async function callParametersLambda() {
  const myInit = { queryStringParameters: {} };
  try {
    const getCall = await API.get('credentialsAccessGateway', '/credentialsAccess', myInit);
    console.log(getCall);
    return getCall;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error if needed
  }
}

// In your useEffect, you need to await the result
async function setMUILicenseKey() {
  try {
    let getCallEffect = await callParametersLambda()
    LicenseInfo.setLicenseKey(getCallEffect);
    console.log("MUI Key set")
  } catch (error) {
    console.error(error);
  }
}

setMUILicenseKey()


const queryClient = new QueryClient()

Amplify.configure(awsmobile);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()