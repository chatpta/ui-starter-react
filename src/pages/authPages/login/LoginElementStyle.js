import { makeStyles } from "@mui/styles";

const useLoginElementStyle = makeStyles( theme => ( {
    formBox: ( props ) => ( {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: theme.dimensions.borderRadius,
        backgroundColor: theme.palette.main,
        marginTop: props.marginTop,

        '@media (min-width: 500px)': {
            padding: theme.spacing( 2 ),
            boxShadow: theme.shadows[ 10 ],
        },
    } ),
} ), { index: 1 } );

export default useLoginElementStyle;
