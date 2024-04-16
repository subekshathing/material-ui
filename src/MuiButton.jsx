import React from 'react'
import {Button} from "@mui/material"
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

const MuiButton = () => {
  return (
  <div>
      <div>
        <h1>Varient</h1>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
        <Button variant='text'>Text</Button>
    </div>
    <div>
        <h1>Colors</h1>
        <Button  color='primary'>Primary</Button>
        <Button color='secondary'>Secondary</Button>
        <Button color='success'>Success</Button>
        <Button color='warning'>Warning</Button>
    </div>
    <div>
        <h1>Icons</h1>
        <Button  sx={{color:"black"}}><AccessAlarmsIcon></AccessAlarmsIcon></Button>
        <Button color='secondary' startIcon={<SendIcon/>} >Send</Button>
        <Button color='secondary' endIcon={<DeleteIcon/>} >Delete</Button>
      
    </div>
  </div>
  )
}

export default MuiButton