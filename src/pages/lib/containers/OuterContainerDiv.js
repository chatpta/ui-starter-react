import { styled } from "@mui/system";

const OuterContainerDiv = styled( 'div' )( ( { theme } ) => ( {
    margin: "auto",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.main,
    boxShadow: theme.shadows[10],
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing( 1 ),
    '@media (min-width: 768px)': {
        width: '80%',
        borderRadius: theme.dimensions.borderRadius,
        marginTop: theme.spacing( 2 ),
    },
    '@media (min-width: 1000px)': {
        width: '900px',
        borderRadius: theme.dimensions.borderRadius,
    }
} ) );

export default OuterContainerDiv;
