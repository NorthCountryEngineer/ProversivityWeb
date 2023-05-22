export type AboutCalloutsProps = {
    isMobile: boolean
    callouts: CalloutBoxProps[]
}

//Service Provider signup form props and sample variable assignment
export type ServiceProviderSignUpProps = {
    address: string;
    activeStep: number;
    companyName: string;
    confPassword: string;
    email: string;
    errorMessage: string;
    firstName: string;
    loadingComplete: boolean;
    isAuthenticated: boolean;
    isComplete: boolean;
    isConfPasswordFocused: boolean;
    lastName: string;
    password: string;
    passwordsMatch: boolean;
    phone: string;
    skills: string;
    town: string;
    userID: string;
    verificationCodeSent: boolean;
    verificationModalOpen: boolean;
    verificationSuccess: boolean;
}

export const ServiceProviderSignupInitialState:ServiceProviderSignUpProps = {
    address: '',
    activeStep: 0,
    companyName: '',
    confPassword: '',
    email: '',
    errorMessage: '',
    firstName: '',
    loadingComplete: false,
    isAuthenticated: false,
    isComplete: false,
    isConfPasswordFocused: false,
    lastName: '',
    password: '',
    passwordsMatch: true,
    phone: '',
    skills: '',
    town: '',
    userID: '',
    verificationCodeSent: false,
    verificationModalOpen: false,
    verificationSuccess: false,
  };