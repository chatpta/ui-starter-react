import { makeStyles } from "@mui/styles";

const useRecoverElementStyle = makeStyles( theme => ( {
    container: () => ( {
        paddingTop: theme.spacing( 2 ),
        '@media (min-width: 500px)': {
            paddingTop: theme.spacing( 8 ),
        },
    } ),
    formBox: () => ( {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: theme.dimensions.borderRadius,
        backgroundColor: theme.palette.background.default,

        '@media (min-width: 500px)': {
            padding: theme.spacing( 2 ),
            boxShadow: theme.shadows[ 10 ],
        },
    } ),
    form: () => ( {
        width: "100%",
    } ),
} ) );

export default useRecoverElementStyle;
