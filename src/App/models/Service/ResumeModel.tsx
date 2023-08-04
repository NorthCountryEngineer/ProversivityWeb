//Enums
export enum DegreeType{
    AA="AA",
    AS="AS",
    AAS="AAS",
    BSc="BSC",
    BA="BA",
    BFA="BFA",
    MA="MA",
    MS="MS",
    MBA="MBA",
    PhD="PHD",
    MD="MD",
    JD="JD",
    CERT="CERT",
    OTHER="OTHER"
}

export enum Scope{
    Read="READ",
    Write="WRITE",
    Update="UPDATE",
    Delete="DELETE"
}

export enum ResumeStatus {
    DRAFT="DRAFT",
    RELEASED="RELEASED",
    DEPRECATED="DEPRECATED"
}

//-------------------------------------

//Interfaces
export interface Address {
    Street?: string | unknown
    City?: string | unknown
    State?: string | unknown
    Zip?: string | unknown
}

export interface InitialResume {
    id: string,
    Author: string
    Skills: string[]
    Status: string
    Title: string
    resumeOverview: string
    resumePersonalData: string
}


export interface Resume extends InitialResume{
    Education: Education
    Experience: Experience
    Overview: Overview
    PersonalData: PersonalData
    Skills: string[]
}


export const CurrentResumeObject:Resume= {
    id: "1",
    Author:"",
    Status: ResumeStatus.DRAFT,
    Title: "Generic_Resume_20230804",
    resumeOverview: ` `,
    resumePersonalData: ``,
    Overview: {
        id: "2",
        Summary: {
            id: "3",
            Summary: ""
        },
        Accomplishments: [{
            id: "4",
            Accomplishment: ""
        }]
    },
    PersonalData: {
        Acronyms: "",
        Address: {
            Street:"",
            City:"Remote/Virtual",
            State:"NY",
            Zip:""
        },
        Contact: {
            email:"eric.p.yager@northcountryengineer.com",
            phone:"(315)854-6887"
        },
        First: "Eric",
        JobTitle: "Software Development Manager",
        Last: "Yager",
        Middle: "",
        Owner: "",
        SocialMedias: [
            {
                id: "",
                type: "LinkedIn",
                URL: "https://www.linkedin.com/in/eric-yager-pmp"
            },
            {
                id: "",
                type: "Personal_Webpage",
                URL: "https://www.northcountryengineer.com"
            }
        ],
        id: "",
        personalDataAddressId: "",
        personalDataContactId: "",
    },
    Experience: {
        items: [
            {
                Company: "Amazon",
                Start: new Date(Date.parse('04 Dec 1995 00:00:00 GMT')),
                End: new Date(Date.parse('04 Dec 1995 00:12:00 GMT')),
                IsCurrent:true,
                JobTitle:"Software Development Manager III",
                Organization:"People Experience Technology (PXT)",
                Overview:`Engineering lead in Amazon People Experience Technology. Managing two cross functional (engineering and science) teams building internally facing talent management services.`,
                BulletPoints: [
                    {
                        BulletText: "Led tiger team of senior engineers and senior product staff to build requirements and high level design requirements for “Employee Skills Ontology”, a backend service interpreting HR documentation to annotate an ontology of skills for each job role in Amazon",
                        SubBullet: ""
                    },

                    {
                        BulletText: "Worked with design technologists, scientists, and machine learning engineers to build ML engine (training, retraining, model slippage detection, API layer) and UI product for organizational design",
                        SubBullet: ""
                    },
                ]
            },
        ]
    },
    Education: {
        items: [
            {
                Degree: DegreeType.AA,
                School:"",
                Start: new Date(Date.parse('04 Dec 1995 00:12:00 GMT')),
                End: new Date(Date.parse('04 Dec 1995 00:12:00 GMT')),
                Overview: "" 
            }
        ]
    },
    Skills: [

    ]   
}

export interface Contact {
    email?: string | unknown
    phone?: string | unknown
}

export interface PersonalData{
    Acronyms: string
    Address: Address
    Contact: Contact
    First: string
    JobTitle: string
    Last: string
    Middle: string
    Owner: string
    id: string
    personalDataAddressId: string
    personalDataContactId: string
    SocialMedias: SocialMedia[]
}

export interface SocialMedia {
    id: string
    type: string
    URL: string
}

export interface Summary {
    id: string
    Summary: string
}

export interface Accomplishment {
    id: string
    Accomplishment: string
}

export interface Overview {
    id: string
    Summary: Summary
    Accomplishments: Accomplishment[]
}

export interface EducationObject {
    Degree: DegreeType
    School: string
    Start: Date
    End: Date
    Overview: string
}

export interface Education {
    items: EducationObject[]
}

export interface Skills{
    Skill: string
    Category: string
}

export interface Bullet{
    BulletText: string
    SubBullet: string
}

export interface ExperienceObject {
    Company: string
    Start: Date
    End: Date
    IsCurrent: boolean
    JobTitle: string
    Organization: string
    Overview: string
    BulletPoints: Bullet[]
}

export interface Experience {
    items: ExperienceObject[]
}

/**export interface SelectedCellParams {
    id: GridRowId
    field: string
}
  
export interface EditToolbarProps {
    selectedCellParams?: SelectedCellParams
    cellModesModel: GridCellModesModel
    setCellModesModel: (value: GridCellModesModel) => void
    cellMode: 'view' | 'edit'
}
**/
export interface SharePool {
    ResumeID: string
    DelegatedOwners: string[]
    Viewers: string[]
    AuthorizedUserPools: {poolID: string, authorizationScope: Scope}[]
}

//-------------------------------------

//Templates


export const AddressTemplate:Address = {
    Street:"",
    City:"",
    State:"",
    Zip:""
}

export const ContactTemplate:Contact = {
    email: "",
    phone: ""
}

export const PersonalDataTemplate:PersonalData = {
    Acronyms: "",
    Address: AddressTemplate,
    Contact: ContactTemplate,
    First: "",
    JobTitle: "",
    Last: "",
    Middle: "",
    Owner: "",
    SocialMedias: [
        {
            id: "",
            type: "",
            URL: "",
        },
    ],
    id: "",
    personalDataAddressId: "",
    personalDataContactId: "",
}

export const SummaryTemplate:Summary = {
    id: "",
    Summary: ""
}

export const AccomplishmentTemplate:Accomplishment = {
    id: "",
    Accomplishment: ""
}

export const OverviewTemplate:Overview = {
    id: "",
    Summary: SummaryTemplate, 
    Accomplishments: [AccomplishmentTemplate]
}

export const SkillsTemplate:Skills = {
    Skill: "",
    Category: ""
}

export const BulletTemplate:Bullet = {
    BulletText: "",
    SubBullet: ""
}

export const EducationObjectTemplate:EducationObject = {
    Degree: DegreeType.AA,
    School:"",
    Start: new Date(Date.parse('04 Dec 1995 00:12:00 GMT')),
    End: new Date(Date.parse('04 Dec 1995 00:12:00 GMT')),
    Overview: ""
}

export const EducationTemplate:Education = {
    items: [EducationObjectTemplate]
}

export const ExperienceObjectTemplate:ExperienceObject = {
    Company: "",
    Start: new Date(Date.now()),
    End: new Date(Date.now()),
    IsCurrent:false,
    JobTitle:"",
    Organization:"",
    Overview:"",
    BulletPoints: [BulletTemplate]

}

export const ExperienceTemplate:Experience = {
    items: [ExperienceObjectTemplate]
}

export const SharePoolTemplate:SharePool = {
    ResumeID: "",
    DelegatedOwners: [""],
    Viewers: [""],
    AuthorizedUserPools: [{
        poolID: "",
        authorizationScope: Scope.Delete
    }]
}

export const InitialResumeTemplate:InitialResume = {
    id:"",
    Author: "",
    Skills:[""],
    Status: ResumeStatus.DRAFT,
    Title: "",
    resumeOverview: "",
    resumePersonalData: "",
}

export const ResumeTemplate:Resume = {
    Education: EducationTemplate,
    Experience: ExperienceTemplate,
    Overview: OverviewTemplate,
    PersonalData: PersonalDataTemplate,
    ...InitialResumeTemplate
}



