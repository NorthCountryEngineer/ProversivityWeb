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
    Street: string 
    City: string 
    State: string 
    Zip: string 
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
            email:"eric@northcountryengineer.com",
            phone:"(315) 355-7553"
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
                Start: new Date(Date.parse('01 May 2022 00:00:00 GMT')),
                End: new Date(),
                IsCurrent:true,
                Location:"Remote, NY",
                JobTitle:"Software Development Manager III",
                Organization:"People Experience Technology (PXT)",
                Overview:`Engineering lead in Amazon People Experience Technology. Managing two cross functional (engineering and science) teams building internally facing talent management services.`,

                BulletPoints: [
                    {
                        BulletText: "Led tiger team of senior engineers and senior product staff to build requirements and high level design requirements for “Employee Skills Ontology”, a backend service interpreting HR documentation to annotate an ontology of skills for each job role in Amazon",
                        SubBullet: [""]
                    },

                    {
                        BulletText: "Worked with design technologists, scientists, and machine learning engineers to build ML engine (training, retraining, model slippage detection, API layer) and UI product for organizational design",
                        SubBullet: [""]
                    },
                ]
            },
            {
                Company: "Amazon",
                Start: new Date(Date.parse('13 Apr 2020 00:00:00 GMT')),
                End: new Date(Date.parse('01 May 2022 00:00:00 GMT')),
                IsCurrent:false,
                Location: "Nashville, TN",
                JobTitle:"Software Development Manager III",
                Organization:"People Experience Technology (PXT)",
                Overview:`Grew from engineering leader over two Air safety and financial compliance products to the site tech lead for Air Science and Tech in Amazon’s Nashville Ops Center of Excellence overseeing 4 product teams.`,
                BulletPoints: [
                    {
                        BulletText: "Grew engineering and science teams by 20% between 2021 and 2022, allowing Amazon Air to meet 2022 software requirements even with extreme hiring challenges during COVID",
                        SubBullet: [""]
                    },

                    {
                        BulletText: "Spearheaded the design and oversaw the implementation of a frontend service using AWS services and React which allows users to create and manipulate organizational charts with live machine learning/science inference built into the user experience indicating the “effectiveness” of a proposed team and organization design.",
                        SubBullet: [""]
                    },
                ]
            },
            {
                Company: "Dell Technologies",
                Start: new Date(Date.parse('01 Oct 2018 00:00:00 GMT')),
                End: new Date(Date.parse('13 Apr 2020 00:00:00 GMT')),
                IsCurrent:false,
                Location: "Austin, TX",
                JobTitle:"Software Engineer / Sr. Software Engineer",
                Organization:"Global Logistics / Server Procurement",
                Overview:`Software engineer with a focus on overhauling manual server procurement processes, utilizing a modern tech stack including Pivotal Cloud Foundry, Flask, Django, Azure Data Factory, and Azure SQL, while establishing coding standards, documentation practices, and leading a high-performing team.`,
                BulletPoints: [
                    {
                        BulletText: "Established software engineering efforts within Dell's server procurement organization, transforming manual procurement and supply chain activities into automated processes as first software engineer hire for SVP organization.",
                        SubBullet: [""]
                    },

                    {
                        BulletText: "Planned, engineered, and launched two major products:",
                        SubBullet: [
                            "Developed a datapipeline leveraging Azure Data Factory to extract, validate, and clean raw data from a data lake, exposing it as a REST API w/ Flask, Pivotal Cloud Foundry, and MSSQL on Azure.",
                            "Created a web-based UI enabling users to query, view, and perform CRUD operations on 1Bn+ individual parts throughout the supply chain. Django, Pivotal Cloud Foundry, federated auth, and an Azure SQL database (MSSQL)."
                        ]
                    },
                ]
            },
            {
                Company: "United States Army",
                Start: new Date(Date.parse('26 June 2007 00:00:00 GMT')),
                End: new Date(Date.parse('01 Oct 2018 00:00:00 GMT')),
                IsCurrent:false,
                Location: "Fort Drum, NY / Fort Liberty, NC / Fort Cavazos, TX",
                JobTitle:"Army Officer / Team Lead",
                Organization:"US Army Special Operations Command",
                Overview:`Grew from engineering leader over two Air safety and financial compliance products to the site tech lead for Air Science and Tech in Amazon’s Nashville Ops Center of Excellence overseeing 4 product teams.`,
                BulletPoints: [
                    {
                        BulletText: `Selected to lead a cross functional Special Forces Operational Detachment-Golf in Afghanistan, a job never done before by my career specialty, responsible for training security forces and providing local government mentorship immediately following withdrawal of conventional US forces.`,
                        SubBullet: [""]
                    },
                    {
                        BulletText: `Selected by then-COL John Brennan ahead of dozens of peers to be the first uniformed service member to deploy forward for the Syria Train and Equip program (2015), leading another Operational Detachment-Golf to establish humanitarian and material supply routes in and out of the Aleppo region of Syria.`,
                        SubBullet: [""]
                    },
                    {
                        BulletText: `Temporarily assigned to Special Operations Command-South in Miami to head overhaul of information management, including managing 1P and contract resources, for Secret classified reporting, ensuring successful execution and adherence to strict security protocols and data management between austere teams in South America and the central hub in Miami`,
                        SubBullet: [""]
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
    email: string 
    phone: string 
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
    SubBullet: string[]
}

export interface ExperienceObject {
    Company: string
    Start: Date
    End: Date
    IsCurrent: boolean
    JobTitle: string
    Location: string
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
    selectedCellParams: SelectedCellParams
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
    SubBullet: [""]
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
    Location:"",
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



