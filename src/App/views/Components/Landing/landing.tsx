import { CircularProgress, Typography, Box } from '@mui/material'
import Image from 'mui-image'

export function LoadingScreen({ logoSrc }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Image src={logoSrc} alt="Company logo" />
      <Typography variant="h5" sx={{ mt: 3 }}>
        Loading...
      </Typography>
      <CircularProgress sx={{ mt: 2 }} />
    </Box>
  )
}
