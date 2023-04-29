import { API, graphqlOperation } from "aws-amplify";
import { deleteResume } from "../../../../graphql/mutations";
import { listResumes } from "../../../../graphql/queries";

interface ResumeInterface {
    id:String
    title:String
}

export async function listResumesCallWithHook(setter:any) {
    try {
        const listResumesCall:any = await API.graphql(graphqlOperation(listResumes))
        let resumesCallItems:any = listResumesCall.data.listResumes.items
        let tempData:ResumeInterface[] = []
        resumesCallItems.forEach((resume:any) => {
            tempData = [...tempData, {id:String(resume.id),title:String(resume.Title)}]
        });
        console.log(tempData)
        setter(tempData)
    } catch (err) { 
        console.log('error fetching resumes ',err) 
    }
}

export async function deleteResumeByID(resumeID:String,updateTableData:any,updateCurrentResume:any){
    let resumeCall:any
    try{
        resumeCall = await API.graphql(graphqlOperation(deleteResume, {input: {id: resumeID}}))
        if(resumeCall){
            listResumesCallWithHook(updateTableData)
            updateCurrentResume()
        }
    }catch(error){
        console.error(error)
    }
}