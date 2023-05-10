export type HeaderProps = {
    setUserAttributes?: Function;
    userAttributes?: any;
  };

export type ResumeComponentHandlerProps = {
  Handler?:any;
  Data?:any;
}

export const homePageStyleProps = (targetImage:string) => {
  return(
    {
      backgroundImage: `url(${process.env.PUBLIC_URL}/Images/BarnInterior.png)`,
      height:'100vh',
      marginTop:'0px',
      fontSize:'25px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }
  )
};