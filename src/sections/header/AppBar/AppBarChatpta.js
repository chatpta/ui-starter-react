import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { pathAndURL } from "../../../config";


export default function AppBarChatpta() {

    let navigate = useNavigate();

    function handleLoginClick( event ) {
        event.preventDefault();
        event.stopPropagation();
        navigate( pathAndURL.usersLoginPath() );
    }

    return (
        <Box sx={ { flexGrow: 1 } }>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={ { mr: 2 } }
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>

                    </Typography>
                    <Button
                        color="secondary"
                        onClick={ handleLoginClick }
                    >Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
