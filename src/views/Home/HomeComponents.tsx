import { Button, Grid, Paper, TextField, Typography } from "@mui/material"

const homePageBackgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/Home_Wallpaper.png)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
};

export const HomeContactForm = ({mobile, classStyles}) => {
    return(
        <Grid container style={homePageBackgroundStyle}>
        {mobile ? (
          <Grid item xs={12}>
            <Paper className={classStyles.paper}>
              <Typography variant="h5" component="h2" gutterBottom>
                Contact Us
              </Typography>
              <form className={classStyles.form}>
                <TextField
                  label="Name"
                  variant="outlined"
                  className={classStyles.textField}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  className={classStyles.textField}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  className={classStyles.textField}
                />
                <Button
                  variant="contained"
                  color="primary"
                  className={classStyles.button}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        ) : (
          <>
            <Grid item xs={12} sm={3}>
              {/* Add your photo here */}
            </Grid>
            <Grid item xs={12} sm={9}>
              <Paper className={classStyles.paper}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Contact Us
                </Typography>
                <form className={classStyles.form}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    className={classStyles.textField}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    className={classStyles.textField}
                  />
                  <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    className={classStyles.textField}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    className={classStyles.button}
                  >
                    Submit
                  </Button>
                </form>
              </Paper>
            </Grid>
          </>
        )}
      </Grid>
    )
}