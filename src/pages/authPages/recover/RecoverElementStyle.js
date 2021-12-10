import { makeStyles } from "@mui/styles";

const useRecoverElementStyle = makeStyles( theme => ( {
    root: {
        backgroundColor: theme.palette.background,
        marginTop: theme.dimensions.topBarHeight,
        minHeight: 200,
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
        maxWidth: theme.dimensions.fullWidth,
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
        color: theme.palette.primary.main,
        cursor: "pointer",
    },
    topButtonRow: {
        marginTop: theme.spacing( 2 ),
        display: "flex",
        justifyContent: "space-between",
        '&>*': {
            width: "45%",
            flexGrow: 5,
        },
    },
    space: {
        flexGrow: 1,
        width: theme.spacing( 1 ),
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

export default useRecoverElementStyle;
