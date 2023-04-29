import { API, graphqlOperation } from "aws-amplify"
import { createAccomplishments, createAddress, createContact, createEducation, createOverview, createPersonalData, createResume, createResumeEducation, createResumeExperience, createSummary, updateAccomplishments, updateOverview, updatePersonalData, updateResume } from "../../../../graphql/mutations"
import { createExperience } from "../../../../graphql/mutations"

type ResumeInputTemplate = {
    Author: string,
    Title: string,
    Status: string
}

export async function CreateNewResumeAPICalls(ResumeInput:ResumeInputTemplate, progressFunction?:any):Promise<String>{
    let returnTokens:any={}
    let resumeInput = {Author: ResumeInput.Author, Status: ResumeInput.Status, Title: ResumeInput.Title}

    function updateProgress(statusLevel:Number, desiredText?:String){
        if(progressFunction && desiredText){
            progressFunction(statusLevel, desiredText)
        }
        if(progressFunction && !desiredText){
            progressFunction(statusLevel)
        }
    }

    try{
        updateProgress(33,"Creating initial resume components")
        let newExperienceCall:any = await API.graphql(graphqlOperation(createExperience, {input: {}}))
        let newContactCall:any = await API.graphql(graphqlOperation(createContact, {input: {}}))
        let newEducationCall:any = await API.graphql(graphqlOperation(createEducation, {input: {}}))
        let newAddressCall:any = await API.graphql(graphqlOperation(createAddress, {input: {}}))
        let newOverviewCall:any = await API.graphql(graphqlOperation(createOverview, {input: {}}))
        let newPersonalDataCall:any = await API.graphql(graphqlOperation(createPersonalData, {input:  {}}))
        let newSummaryCall:any = await API.graphql(graphqlOperation(createSummary, {input:  {}}))
        let newAccomplishmentCall:any = await API.graphql(graphqlOperation(createAccomplishments, {input:  {}}))
        let newResumeCall:any = await API.graphql(graphqlOperation(createResume, {input: resumeInput}))
       

        if(newExperienceCall && newContactCall && newEducationCall && newAddressCall && newOverviewCall && newPersonalDataCall && newResumeCall&&newSummaryCall&&newAccomplishmentCall){
            returnTokens.experience=newExperienceCall.data.createExperience.id
            returnTokens.contact = newContactCall.data.createContact.id
            returnTokens.education = newEducationCall.data.createEducation.id
            returnTokens.address = newAddressCall.data.createAddress.id
            returnTokens.overview = newOverviewCall.data.createOverview.id
            returnTokens.personalData = newPersonalDataCall.data.createPersonalData.id
            returnTokens.resume = newResumeCall.data.createResume.id
            returnTokens.summary = newSummaryCall.data.createSummary.id
            returnTokens.accomplishments = newAccomplishmentCall.data.createAccomplishments.id
            updateProgress(66, "Initial Components Created")
        }

    } catch(error:any){
        updateProgress(0, `Error found`)
        console.error("Error creating resume components: ", error)
        return ""
    }

    try{
        let linkResumeEducationCall:any = await API.graphql(graphqlOperation(createResumeEducation, {input: {educationID: returnTokens.education, resumeID: returnTokens.resume}}))
        let linkResumeExperienceCall:any = await API.graphql(graphqlOperation(createResumeExperience, {input: {experienceID: returnTokens.experience, resumeID: returnTokens.resume}}))
        let linkResumeOverviewPersonalDataCall:any = await API.graphql(graphqlOperation(updateResume, {input: {resumeOverviewId: returnTokens.overview, resumePersonalDataId: returnTokens.personalData, id: returnTokens.resume}}))
        let linkOverviewResumeCall:any = await API.graphql(graphqlOperation(updateOverview, {input: {overviewResumeId: returnTokens.resume, overviewSummaryId: returnTokens.summary, id: returnTokens.overview}}))
        let linkPersonalDataResumeCall:any = await API.graphql(graphqlOperation(updatePersonalData, {input: {personalDataContactId: returnTokens.contact, personalDataAddressId: returnTokens.address, id: returnTokens.personalData}}))
        let linkSummaryOverviewCall:any = await API.graphql(graphqlOperation(updateOverview, {input: {id: returnTokens.overview, overviewSummaryId: returnTokens.summary, overviewResumeId: returnTokens.resume}}))
        let linkOverviewAccomplishment:any = await API.graphql(graphqlOperation(updateAccomplishments, {input: {id: returnTokens.accomplishments, overviewAccomplishmentsId: returnTokens.overview}}))

        if(linkResumeEducationCall &&
            linkResumeExperienceCall &&
            linkResumeOverviewPersonalDataCall &&
            linkOverviewResumeCall &&
            linkPersonalDataResumeCall &&
            linkSummaryOverviewCall &&
            linkOverviewAccomplishment){
                updateProgress(100, "Resume Components harmonized with resume")
                console.log("Resume components linked to resume successfully. Resume ID is: ", returnTokens.resume)
            }else{
                console.log(linkResumeExperienceCall, linkResumeOverviewPersonalDataCall, linkOverviewResumeCall, linkPersonalDataResumeCall)
            }
    }catch(error){
        console.error("Error linking resume components to resume: ", error)
        return ""
    }
    return returnTokens.resume
}

export function handleAmplifyGraphQLCall(graphQLFunction:any, input:any={}){
    console.log("making call")
    try{
        let returnPayload = API.graphql(graphqlOperation(graphQLFunction, {input: input}))
        return(returnPayload)
    }catch(error){
        console.error(error)
        return(error)
    }
}