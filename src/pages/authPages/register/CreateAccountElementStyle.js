import { makeStyles } from "@mui/styles";

const useCreateAccountElementStyle = makeStyles( theme => ( {
    formBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: theme.dimensions.borderRadius,
        backgroundColor: theme.palette.main,

        '@media (min-width: 500px)': {
            padding: theme.spacing( 2 ),
            boxShadow: theme.shadows[ 10 ],
        },
    },
    form:  {
        width: "100%",
    } ,
} ) );

export default useCreateAccountElementStyle;
