import { useEffect, useState } from 'react';
import { getAppClientAccessToken } from '../../Authentication';
import { API, Auth, graphqlOperation } from 'aws-amplify';
import { getUser } from '../../../../graphql/queries';


export function ServiceProviderSignupHooks(serviceProviderSignupAttributes, setServiceProviderSignupAttributes) {

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

    return(serviceProviderSignupAttributes)
}