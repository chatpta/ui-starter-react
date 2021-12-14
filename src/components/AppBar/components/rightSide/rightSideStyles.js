import { makeStyles } from "@mui/styles";

const useRightSideStyle = makeStyles( theme => ( {
    container: () => ( {
        paddingTop: theme.spacing( 2 ),
        '@media (min-width: 500px)': {
            paddingTop: theme.spacing( 8 ),
        },
    } ),
    sectionDesktop: {
        display: 'none',
        [ theme.breakpoints.up( 'md' ) ]: {
            display: 'flex',
        },
    },
    horizontalSpace: {
        width: theme.spacing(2),
    }
} ), { index: 1 } );

export default useRightSideStyle;

