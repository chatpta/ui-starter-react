import { makeStyles } from "@mui/styles";

const useLandStyle = makeStyles( theme => ( {
    container: () => ( {
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    } ),
} ), { index: 1 } );

export default useLandStyle;
