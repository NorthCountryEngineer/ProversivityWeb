export type HeaderProps = {
    setUserAttributes?: Function;
    userAttributes?: any;
  };

export type ResumeComponentHandlerProps = {
  Handler?:any;
  Data?:any;
}

export const homePageStyleProps = (DarkMode:Boolean, targetImage:number) => {
  return(
    {
      backgroundImage: DarkMode ? `url(/DarkBackground/${targetImage}.jpeg)` : `url(/LightBackground/${targetImage}.jpeg)`,
      height:'100vh',
      marginTop:'0px',
      fontSize:'25px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
  )
  
};