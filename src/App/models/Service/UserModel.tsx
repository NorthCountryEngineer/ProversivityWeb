import { Resume } from "./ResumeModel"

export interface User{
    UserID: string
    Preferences: Preferences
    Resumes: [Resume]
}

export interface Preferences{
    id: String
    User: String
    DisplayName: String
    DarkMode: boolean
}