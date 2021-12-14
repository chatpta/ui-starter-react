import { makeStyles } from "@mui/styles";

const useDrawerComponentStyles = makeStyles( theme => ( {
    // toolbar: theme.mixins.toolbar,
    paper: {
        background: theme.palette.background.main,
    },
    toolbar: {
        height: theme.spacing( 8 ),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    title: {
        flexGrow: 1,
    },
    titleText: {
        // textAlign: "center",
        '& > span': {
            fontWeight: 600,
        },
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
    },
    accountCircle:{
        color: theme.palette.common.white,
    },
    drawerMain: {
        paddingTop: 0,
        paddingBlock: 0,
    }
} ) );

export default useDrawerComponentStyles;
