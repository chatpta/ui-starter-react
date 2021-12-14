import { makeStyles } from "@mui/styles";

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
