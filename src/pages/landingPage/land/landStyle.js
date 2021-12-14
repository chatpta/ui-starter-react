import { makeStyles } from "@mui/styles";

const useLandStyle = makeStyles( theme => ( {
    container: () => ( {
        paddingTop: theme.spacing( 2 ),
        '@media (min-width: 500px)': {
            paddingTop: theme.spacing( 8 ),
        },
    } ),
} ), { index: 1 } );

export default useLandStyle;
