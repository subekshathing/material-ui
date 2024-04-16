import React from 'react'
import {Typography} from "@mui/material"

const MuiTypography = () => {
  return (
    <div>
        <Typography>hello(default:body1)</Typography>
        <Typography variant='h1'>Heading1</Typography>
        <Typography variant='h2'>Heading2</Typography>
        <Typography variant='h3'>Heading3</Typography>
        <Typography variant='h4'>Heading4</Typography>
        <Typography variant='h5'>Heading5</Typography>
        <Typography variant='h6'>Heading6</Typography>
        <Typography variant='body1'>body1</Typography>
        <Typography variant='body2'>body2</Typography>
        <Typography variant='subtitle1'>subtitle1</Typography>
        <Typography variant='subtitle2'>subtitle2</Typography>
    </div>
  )
}

export default MuiTypography