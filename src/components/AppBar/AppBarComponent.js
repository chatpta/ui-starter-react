import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import useAppBarStyles from "./AppBarComponentStyle";
import appConfig from "../../config/app-config.json";
import Search from "./components/Search";


export default function AppBarComponent( props ) {
    const { toggleDrawer, user } = props;
    const classes = useAppBarStyles();
    const [ anchorEl, setAnchorEl ] = React.useState( null );
    const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = React.useState( null );

    const isMenuOpen = Boolean( anchorEl );
    const isMobileMenuOpen = Boolean( mobileMoreAnchorEl );

    const handleProfileMenuOpen = event => {
        setAnchorEl( event.currentTarget );
    };

    const handleMenuClose = () => {
        setAnchorEl( null );
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl( event.currentTarget );
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl( null );
    };

    const renderMenuItems = ( user ) => {
        if ( user?.jwt ) {
            return (
                [
                    <MenuItem key={ "profile" } onClick={ handleMenuClose }>Profile</MenuItem>,
                    <MenuItem key={ "account" } onClick={ handleMenuClose }>My account</MenuItem>
                ]
            );
        } else {
            return (
                <MenuItem onClick={ handleMenuClose }>Login</MenuItem>
            );
        }
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={ anchorEl }
            anchorOrigin={ { vertical: 'top', horizontal: 'left' } }
            id={ menuId }
            keepMounted
            transformOrigin={ { vertical: 'top', horizontal: 'right' } }
            open={ isMenuOpen }
            onClose={ handleMenuClose }
        >
            { renderMenuItems( user ) }
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={ mobileMoreAnchorEl }
            anchorOrigin={ { vertical: 'top', horizontal: 'right' } }
            id={ mobileMenuId }
            keepMounted
            transformOrigin={ { vertical: 'top', horizontal: 'right' } }
            open={ isMobileMenuOpen }
            onClose={ handleMobileMenuClose }
        >
            <MenuItem>
                <IconButton aria-label="shopping cart" color="inherit">
                    <Badge badgeContent={ 4 } color="secondary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            {/*<MenuItem>*/ }
            {/*    <IconButton aria-label="show 11 new notifications" color="inherit">*/ }
            {/*        <Badge badgeContent={11} color="secondary">*/ }
            {/*            <NotificationsIcon />*/ }
            {/*        </Badge>*/ }
            {/*    </IconButton>*/ }
            {/*    <p>Notifications</p>*/ }
            {/*</MenuItem>*/ }
            <MenuItem onClick={ handleProfileMenuOpen }>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>User</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={ classes.grow }>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={ classes.menuButton }
                        color="inherit"
                        aria-label="open drawer"
                        onClick={ toggleDrawer( 'left', true ) }
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Link to={ "/" } className={ classes.link }>
                        <Typography className={ classes.title } variant="h6" noWrap>
                            { appConfig.name }<span className={ classes.ca }>.ca</span>
                        </Typography>
                    </Link>
                    <div className={ classes.grow }/>
                    <Search/>
                    <div className={ classes.grow }/>
                    <div className={ classes.sectionDesktop }>
                        {/*<IconButton aria-label="show 17 new notifications" color="inherit">*/ }
                        {/*    <Badge badgeContent={17} color="secondary">*/ }
                        {/*        <NotificationsIcon />*/ }
                        {/*    </Badge>*/ }
                        {/*</IconButton>*/ }
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={ menuId }
                            aria-haspopup="true"
                            onClick={ handleProfileMenuOpen }
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <span className={ classes.horizontalSpace }>&nbsp;</span>
                        <IconButton aria-label="shopping cart" color="inherit">
                            <Badge badgeContent={ 4 } color="secondary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </IconButton>
                    </div>
                    <div className={ classes.sectionMobile }>
                        <IconButton
                            aria-label="show more"
                            aria-controls={ mobileMenuId }
                            aria-haspopup="true"
                            onClick={ handleMobileMenuOpen }
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            { renderMobileMenu }
            { renderMenu }
        </div>
    );
}
