import React from "react";
import useRightSideStyle from "./rightSideStyles";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

export default function RightSide() {
    const [ anchorEl, setAnchorEl ] = React.useState( null );
    const classes = useRightSideStyle();

    const menuId = 'primary-search-account-menu';
    const handleProfileMenuOpen = event => {
        setAnchorEl( event.currentTarget );
    };

    return (
        <div className={ classes.sectionDesktop }>
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
    );
};