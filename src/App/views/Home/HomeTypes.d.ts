export type HomepageCalloutProps = {
    title: string;
    bulletPoints: string[];
    buttonText: string;
    image?: string;
};
  
export type HomepageCalloutsProps = {
    isMobile: boolean;
    callouts: CalloutBoxProps[];
};
  