import { makeStyles } from "@mui/styles";

const useCreateAccountElementStyle = makeStyles( theme => ( {
    root: {
        minHeight: "76vh",
        display: "flex",
        alignItems: "center",
        marginTop: theme.dimensions.topMenuBarHeight,
        '@media (min-width: 700px)': {
            padding: theme.spacing( 16 ),
        },
        '@media (min-width: 1024px)': {
            padding: theme.spacing( 20 ),
        },
        '@media (min-width: 1800px)': {
            padding: theme.spacing( 30 ),
        },
    },
    innerContainer: {
        maxWidth: theme.dimensions.siteMaxWidth,
        padding: theme.spacing( 2 ),
        margin: "auto",
        '@media (min-width: 660px)': {
            display: "flex",
            flexFlow: "row",
            paddingBottom: theme.spacing( 2 ),
        }
    },
    contactFormContainer: {
        margin: "auto",
        backgroundColor: "white",
        padding: theme.spacing( 4 ),
        borderRadius: "6px",
        minHeight: 200,
        maxWidth: 600,
        '&>*': {
            margin: 0,
        },
        '@media (min-width: 760px)': {
            order: 2,
            padding: theme.spacing( 4 ),
            // paddingTop: theme.spacing(4),
        }
    },
    title: {
        textAlign: "center",
    },
    createAccount: {
        color: theme.palette.secondary.main,
        cursor: "pointer",
    },
    textField: {
        marginTop: theme.spacing( 2 ),
    },
    rememberLine: {
        display: "flex",
        flexFlow: "row",
    },
    forgotPassword: {
        color: theme.palette.primary.main,
        cursor: "pointer",
    },
    sendButton: {
        color: "white",
        textTransform: "none",
        fontWeight: 800,
        marginTop: theme.spacing( 2 ),
        '&>span': {
            paddingTop: theme.spacing( 0.4 ),
        }
    },
} ) );

export default useCreateAccountElementStyle;
