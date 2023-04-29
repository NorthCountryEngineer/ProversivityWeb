import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  GridRowId,
  GridCellModesModel,
} from '@mui/x-data-grid';


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
    Author: string
    Skills: string[]
    Status: ResumeStatus.DRAFT
    Title: string
    resumeOverviewId: string
    resumePersonalDataId: string
    userProvidedID: string
}

export interface Resume extends InitialResume{
    Education: Education
    Experience: Experience
    Overview: Overview
    PersonalData: PersonalData
    Skills: Array<string>
}

export interface Contact {
    email?: string | unknown
    phone?: string | unknown
}

export interface PersonalData{
    Acronyms: string
    Address: Address
    Contact: Contact
    Facebook?: string | unknown
    First: string
    Github?: string | unknown
    JobTitle: string
    Last: string
    LinkedIn?: string | unknown
    Middle: string
    Owner: string
    Reddit?: string | unknown
    Twitter?: string | unknown
    id: string
    owner: string
    personalDataAddressId: string
    personalDataContactId: string
    updatedAt: string
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
    Start: string
    End: string
    Overview: string
}

export interface Education {
    items: Array<EducationObject>
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
    Title: string
    BulletPoints: Bullet[]
}

export interface Experience {
    items: Array<ExperienceObject>
}

export interface SelectedCellParams {
    id: GridRowId;
    field: string;
}
  
export interface EditToolbarProps {
    selectedCellParams?: SelectedCellParams;
    cellModesModel: GridCellModesModel;
    setCellModesModel: (value: GridCellModesModel) => void;
    cellMode: 'view' | 'edit';
}

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
    Facebook: "",
    First: "",
    Github: "",
    JobTitle: "",
    Last: "",
    LinkedIn: "",
    Middle: "",
    Owner: "",
    Reddit: "",
    Twitter: "",
    id: "",
    owner: "",
    personalDataAddressId: "",
    personalDataContactId: "",
    updatedAt: ""
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
    Start: "",
    End: "",
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
    Title:"",
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
    Author: "",
    Skills:[""],
    Status: ResumeStatus.DRAFT,
    Title: "",
    resumeOverviewId: "",
    resumePersonalDataId: "",
    userProvidedID: ""
}

export const ResumeTemplate:Resume = {
    Education: EducationTemplate,
    Experience: ExperienceTemplate,
    Overview: OverviewTemplate,
    PersonalData: PersonalDataTemplate,
    ...InitialResumeTemplate
}



