import { API, Auth, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../../graphql/queries";



function switchFields(selection:number, setSwitchBoard:any){
    if(selection === 1){
        setSwitchBoard("existingOrganizationFieldOpen",false)
        setSwitchBoard("newOrganizationFieldOpen", true)
    }

    if(selection === 2){
        setSwitchBoard("existingOrganizationFieldOpen",true)
        setSwitchBoard("newOrganizationFieldOpen", false)
    }
}



export { switchFields }