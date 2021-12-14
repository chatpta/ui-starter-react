import React from 'react';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useDrawerComponentStyles from "./DrawerComponentStyle";
import links from "../../config/links.json";
import { capitalize } from "@mui/material";
import clsx from "clsx";

export default function SwipeableTemporaryDrawer( props ) {
    const classes = useDrawerComponentStyles();
    const { state, toggleDrawer, user } = props;

    const sideList = side => (
        <div
            className={ clsx( classes.list ) }
            role="presentation"
            onClick={ toggleDrawer( side, false ) }
            onKeyDown={ toggleDrawer( side, false ) }
        >
            <List className={ classes.toolbar }>
                <ListItem button>
                    <ListItemIcon><AccountCircle className={ classes.accountCircle }/></ListItemIcon>
                    <ListItemText
                        className={ classes.titleText }
                        primary={ user.name }
                    />
                </ListItem>
            </List>
            <Divider/>
            <List className={ classes.drawerMain }>
                { links.seller.admin.map( ( text, index ) => (
                    <div key={ index }>
                        <Link to={ text.link } className={ classes.link }>
                            <ListItem button>
                                <ListItemText primary={ capitalize( text.name ) }/>
                            </ListItem>
                        </Link>
                        <Divider/>
                    </div>
                ) ) }
            </List>
        </div>
    );

    return (
        <div>
            <SwipeableDrawer
                classes={ { paper: classes.paper } }
                open={ state.left }
                onClose={ toggleDrawer( 'left', false ) }
                onOpen={ toggleDrawer( 'left', true ) }
            >
                { sideList( 'left' ) }
            </SwipeableDrawer>
        </div>
    );
}
