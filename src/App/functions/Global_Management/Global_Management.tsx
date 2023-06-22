import { Hub } from "aws-amplify"
import { useEffect, useState } from "react"

/**
 * A React hook that subscribes to Hub events and returns the current dynamic title for the Proversivity website.
 * @returns {string} - The current dynamic title.
 */
export const useDynamicTitle = () => {
    const [dynamicTitle, setDynamicTitle] = useState<string>(
      "Engineering The North Country"
    )
  
    useEffect(() => {
      // Listen to "TitleUpdate" events using the Hub object from the AWS Amplify library
      Hub.listen("TitleUpdate", (data:any) => {
        // When a "TitleUpdate" event is received, update the dynamic title
        setDynamicTitle(data.payload.message)
      })
    }, [])
  
    return dynamicTitle
  }