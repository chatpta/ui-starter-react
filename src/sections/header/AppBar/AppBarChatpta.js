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

import lib from "../../../lib";
import StoreConnectUserEdit from "../../../store/storeConnectUserEdit";


function AppBarChatptaElement( props ) {
    const { user, userReset } = props;
    let navigate = useNavigate();
    const handle = lib.authLib.handlers();

    function handleLoginClick( event ) {
        event.preventDefault();
        event.stopPropagation();
        navigate( pathAndURL.usersLoginPath() );
    }

    function handleLogoutClick( event ) {
        event.preventDefault();
        event.stopPropagation();

        handle.deleteUserFromLocalStore();
        handle.logoutUser( user, userReset );
        navigate( pathAndURL.getRootPath() );
    }

    function renderButton( handlers ) {
        if ( handlers.isUserLoggedIn( user ) ) {
            return (
                <Button
                    color="secondary"
                    onClick={ handleLogoutClick }
                >Logout</Button>
            );
        } else {
            return (
                <Button
                    color="secondary"
                    onClick={ handleLoginClick }
                >Login</Button>
            );
        }
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
                    { renderButton( handle ) }
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default StoreConnectUserEdit( AppBarChatptaElement );
