import ApplicationLogo from '@/Components/ApplicationLogo'
import { Link as ILink } from '@inertiajs/react'
import { Box, Grid, Paper, Typography } from '@mui/material'

export default function Guest({ children, displayTitle }) {
  return (
    <Box sx={{ marginTop: 1, padding: '1rem' }}>
      <Box>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Paper sx={{ p: 4 }}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>
                    {displayTitle}
                  </Typography>
                </Grid>
              </Grid>

              {children}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
