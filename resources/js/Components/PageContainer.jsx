import { Typography } from '@mui/material'
import React from 'react'

const PageContainer = ({ children }) => {
  return (
    <div>
      <Typography>{heading}</Typography>
      {children}
    </div>
  )
}

export default PageContainer
