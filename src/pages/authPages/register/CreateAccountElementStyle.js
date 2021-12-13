import { makeStyles } from "@mui/styles";

const useCreateAccountElementStyle = makeStyles( theme => ( {
    formBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: theme.dimensions.borderRadius,
        backgroundColor: theme.palette.main,
        padding: theme.spacing( 2 ),
        marginTop: theme.spacing( 8 ),
        boxShadow: theme.shadows[ 10 ],
    }
} ) );

export default useCreateAccountElementStyle;
