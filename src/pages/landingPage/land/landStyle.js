import { makeStyles } from "@mui/styles";

const useLandStyle = makeStyles( theme => ( {
    container: () => ( {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        color: theme.palette.primary.main,
    } ),
} ), { index: 1 } );

export default useLandStyle;
