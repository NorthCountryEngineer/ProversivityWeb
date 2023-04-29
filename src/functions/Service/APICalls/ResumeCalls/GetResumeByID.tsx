
import { API, graphqlOperation } from 'aws-amplify'
import { getResume } from '../../../../graphql/queries'
import { useLocation } from "react-router-dom";

export const GetResumeByID = async(ResumeID:string) =>{
    try {
        const listResumeCall: any = await API.graphql(graphqlOperation(getResume, {id: ResumeID}))
        return listResumeCall.data.getResume
    } catch (err) { 
        console.log('error fetching resume: ',err)
    }
}