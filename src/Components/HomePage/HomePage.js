import './HomePage.css'
import { TextField, Button } from '@mui/material'
import Box from '@mui/material/Box';



export default function HomePage() {
    return (
        <div className='HomePage'>
            <div className='Login-Page'>
                <Box height={10} />
                <TextField className='Login-Input' label='Username' variant='outlined' />
                <Box height={10} />
                <TextField className='Login-Input' label='Password' variant='outlined' />
                <Box height={10} />
                <Button className='Login-Button' variant='contained'>Login</Button>
            </div>
        </div>
    )
}