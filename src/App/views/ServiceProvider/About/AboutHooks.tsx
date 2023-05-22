import { useEffect, useState } from 'react';
import { getAppClientAccessToken, useAuthentication } from '../../Authentication';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../../../../graphql/queries';
import { ServiceProviderSignUpProps, ServiceProviderSignupInitialState } from './AboutTypes.d';


export function ServiceProviderSignupHooks() {
    const [address, setAddress] = useState('')
    const [activeStep, setActiveStep] = useState(0)
    const [companyName, setCompanyName] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [firstName, setFirstName] = useState('')
    const [loadingComplete, setLoadingComplete] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isComplete, setIsComplete] = useState(false)
    const [isConfPasswordFocused, setIsConfPasswordFocused] = useState(false)
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordsMatch, setPasswordsMatch] = useState(true)
    const [phone, setPhone] = useState('')
    const [skills, setSkills] = useState('')
    const [town, setTown] = useState('')
    const [userID, setUserID] = useState('')
    const [verificationCodeSent, setVerificationCodeSent] = useState(false)
    const [verificationModalOpen, setVerificationModalOpen] = useState(false)
    const [verificationSuccess, setVerificationSuccess] = useState(false)
    const test = useState("test")

    const [serviceProviderSignupAttributes, setServiceProviderSignupAttributes] = useState<ServiceProviderSignUpProps>(ServiceProviderSignupInitialState)

    const updateServiceProviderFormState = (updates: Partial<ServiceProviderSignUpProps>) => {
        console.log({...serviceProviderSignupAttributes, ...updates})
        setServiceProviderSignupAttributes({...serviceProviderSignupAttributes, ...updates});
        console.log(serviceProviderSignupAttributes)
    };

    const SetUserAuthenticationAttributes = async () => {
        const authenticationStatus = getAppClientAccessToken();
        let attributes = {
          isAuthenticated: false,
          email: '',
          verificationSuccess: false,
          userID: '',
          isComplete: false,
          loadingComplete:true,
        };
      
        try {
          if (authenticationStatus) {
            const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();

            attributes.isAuthenticated = authenticationStatus;
            attributes.email = currentAuthenticatedUser.attributes.email;
            attributes.verificationSuccess = currentAuthenticatedUser.attributes.email_verified;
            attributes.userID = currentAuthenticatedUser.attributes.sub;
      
            const userObjectExists = await checkUserObjectExists(currentAuthenticatedUser.attributes.sub);

            if (userObjectExists) {
                attributes.isComplete=true
                setServiceProviderSignupAttributes({ ...serviceProviderSignupAttributes, ...attributes });
            }else{
                setServiceProviderSignupAttributes({ ...serviceProviderSignupAttributes, ...attributes });
            }

            return true;
          }
        } catch (error) {
          console.error(error);
          return false;
        }
        return false;
      };
      
      const checkUserObjectExists = async (userId) => {
        try {
          const query = graphqlOperation(getUser, { id: userId });
          const data: any = await API.graphql(query);
          return !!data.getUser;
        } catch (error) {
          console.error(error);
          return false;
        }
      };
      

    useEffect(() => {
        SetUserAuthenticationAttributes()
    }, []);
      
    useEffect(() => {
        console.log("Updated attributes: ", serviceProviderSignupAttributes);
    }, [serviceProviderSignupAttributes]);
}