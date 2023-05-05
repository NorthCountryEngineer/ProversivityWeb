import { alpha, Box, Paper, Theme, Typography } from "@mui/material"
import { loadFont } from "@remotion/google-fonts/Raleway";

const { fontFamily } = loadFont();

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const windowSize = getWindowDimensions()
console.log(windowSize)

export const ResumeBuilderComponent = (
    <Paper sx={{ m: 1, backgroundColor: alpha('rgb(255,255,255)', 0.5) }} elevation={7}>
        <Box component="svg" sx={{ width: 250, height: 250, fontFamily:"sans-serif" }}>

        </Box>
    </Paper>
)

export function homePageTool(title:string) {
    return(
        <Paper sx={{ m: 1, backgroundColor: alpha('rgb(255,255,255)', 0.5) }} elevation={1}>
            <Typography sx={{ backgroundColor: alpha('rgb(0,0,0)', 0.5), fontFamily:{fontFamily} }}>
                {title}
            </Typography>
         </Paper>
    )
}

export const ChickenLivestreamComponent = (
    <div style={{ fontFamily }}>
        <Paper sx={{ m: 1 }} elevation={4}>
            <Box component="svg" sx={{ width: 100, height: 100 }}>
                Hey
            </Box>
        </Paper>
    </div>
)
