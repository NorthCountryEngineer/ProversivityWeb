import { Auth } from "aws-amplify"
import { useEffect, useState } from "react"

/**
 * A custom hook that returns the email address of the currently authenticated user.
 * @returns {string | undefined} - The email address of the authenticated user, or undefined if no user is authenticated.
 */
export const useUserEmail = () => {
    const [userEmail, setUserEmail] = useState()
  
    /**
     * Retrieves the email address of the currently authenticated user using the AWS Amplify Auth library.
     */
    const GetUserEmail = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser()
        setUserEmail(user.attributes.email)
      } catch (err) {
        console.log({ err })
      }
    }
  
    /**
     * Runs the GetUserEmail function once on component mount.
     */
    useEffect(() => {
      GetUserEmail()
    }, [])
  
    return userEmail
  }
  