import { useEffect, useState } from 'react';
import { useAuthentication } from '../../Authentication';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../../../../graphql/queries';

export function ServiceProviderSignupHooks() {
  const initialState = {
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
    verificationSuccess: false
  };

  const [state, setState] = useState(initialState);

  let isAuthenticated:boolean = useAuthentication()

  const setUserAuthenticationAttributes = async() => {
    try{
        let currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
        console.log(currentAuthenticatedUser)
        initialState.email = currentAuthenticatedUser.attributes.email
        initialState.verificationSuccess = currentAuthenticatedUser.attributes.email_verified
        initialState.userID = currentAuthenticatedUser.attributes.sub
        console.log(currentAuthenticatedUser, initialState)
        return true
    }catch(error){
        console.error(error)
        return false
    }
}   

    useEffect(()=>{

        try{
            setUserAuthenticationAttributes().then((response)=>{
                initialState.userID.length>0 && (
                    checkUserObjectExists(initialState.userID).then(()=>{
                        initialState.loadingComplete = true
                    })
                )
            }).catch((error)=>{
                console.error(error)
                initialState.errorMessage = error
                initialState.loadingComplete = true
            })


            //currentUser && (userAttributes = async() => await getUserAttributes(currentUser))
            //userAttributes && (userVerified = async() => await checkUserVerification(userAttributes))
            //userVerified && (userObjectExists = async() => await checkUserObjectExists(currentUser) )



            //initialState.isComplete = userObjectExists
        }catch(error){
            console.error("Error with getUserData: ", error)
        }

    },[isAuthenticated])

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


const checkUserObjectExists = async (userId):Promise<boolean> => {
    try {
        const query = graphqlOperation(getUser, { id: userId });
        const data:any = await API.graphql(query);
        if(data.getUser===null){
            return false
        }else{
            console.log("checkUserObjectExists: ", data) //Todo: Need to create a user object for myself and then go back and implement what we do if it already exists
        }
        return !!data.getUser; 
    } catch (error) {
        console.error(error);
        return false;
    }
};

const checkUserVerification = async(userAttributes):Promise<boolean> => {
    try{
        console.log(await userAttributes)
        const isVerified = userAttributes.some(
            (attr) => attr.Name === 'email_verified' && attr.Value === 'true'
        );
        return(isVerified)
    } catch(error){
        console.error(error)
        return false
    }
}
