import { makeStyles } from "@mui/styles";
import { lighten } from "@mui/material";

const useAppBarStyles = makeStyles( theme => ( {
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing( 2 ),
    },
    link: {
        textDecoration: 'none',
        color: 'white',
    },
    title: {
        display: 'none',
        color: '#fff',
        [ theme.breakpoints.up( 'sm' ) ]: {
            display: 'block',
        },
    },
    ca: {
        fontSize: '0.6em'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        background: theme.palette.common.white,
        color: theme.palette.common.black,
        // backgroundColor: fade( theme.palette.common.white, 0.15 ),
        // backgroundColor: fade( theme.palette.common.white, 0.25 ),
        '&:focus-within': {
            border: '3px solid ' + lighten( theme.palette.emphasis.main, 0.0 ),
        },
        marginRight: theme.spacing( 2 ),
        marginLeft: 0,
        width: '100%',
        [ theme.breakpoints.up( 'sm' ) ]: {
            marginLeft: theme.spacing( 3 ),
            width: '40%',
        },
    },
    searchIcon: {
        width: theme.spacing( 6 ),
        height: '100%',
        position: 'absolute',
        zIndex: theme.zIndex.appBar,
        pointerEvents: 'all',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: lighten( theme.palette.emphasis.main, 0.5 ),
        color: theme.palette.common.black,
        '&:hover': {
            background: lighten( theme.palette.emphasis.main, 0.2 ),
        },
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        padding: theme.spacing( 1, 1, 1, 7 ),
        transition: theme.transitions.create( 'width' ),
        width: '100%',
        [ theme.breakpoints.up( 'md' ) ]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [ theme.breakpoints.up( 'md' ) ]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [ theme.breakpoints.up( 'md' ) ]: {
            display: 'none',
        },
    },
    horizontalSpace: {
        width: theme.spacing(2),
    }
} ) );

export default useAppBarStyles;
