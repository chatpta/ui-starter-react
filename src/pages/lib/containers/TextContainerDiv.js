import { styled } from "@mui/system";

const TextContainerDiv = styled( 'div' )( ( { theme } ) => ( {
    padding: theme.spacing( 4 ),
    margin: "auto",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
} ) );

export default TextContainerDiv;
