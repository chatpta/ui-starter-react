import React, { useEffect } from "react";
import IndianMasalaAppBarComponent from "../../components/AppBar/AppBarComponent";
import DrawerComponent from "../../components/Drawer/DrawerComponent";
import StoreConnectUserReadOnly from "../../store/storeConnectUserReadOnly";

function HeaderElement( props ) {

    const [ drawerOpen, setDrawerOpen ] = React.useState( {
        left: false,
    } );

    const toggleDrawer = ( side, open ) => event => {
        if ( event && event.type === 'keydown' && ( event.key === 'Tab' || event.key === 'Shift' ) ) {
            return;
        }
        setDrawerOpen( { ...drawerOpen, [ side ]: open } );
    };

    useEffect( () => {
        window.scrollTo( 0, 0 );
    }, [] );

    return (
        <div>
            <DrawerComponent
                user={ props.user }
                state={ drawerOpen }
                setState={ setDrawerOpen }
                toggleDrawer={ toggleDrawer }
            />
            <IndianMasalaAppBarComponent
                toggleDrawer={ toggleDrawer }
                user={ props.user }
            />
        </div>
    );
}

export default StoreConnectUserReadOnly( HeaderElement );