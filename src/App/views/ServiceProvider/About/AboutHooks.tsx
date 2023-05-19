import { useState } from 'react';

export function ServiceProviderSignupHooks() {
  const initialState = {
    address: '',
    activeStep: 0,
    companyName: '',
    confPassword: '',
    email: '',
    errorMessage: '',
    firstName: '',
    isAuthenticated: false,
    isComplete: false,
    isConfPasswordFocused: false,
    lastName: '',
    password: '',
    passwordsMatch: true,
    phone: '',
    skills: '',
    town: '',
    verificationCodeSent: false,
    verificationModalOpen: false,
    verificationSuccess: false
  };

  const [state, setState] = useState(initialState);

  const setHookValue = (key, value) => {
    console.log({key:value})
    setState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  return {
    ...state,
    setHookValue
  };
}
