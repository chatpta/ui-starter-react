import { styled } from "@mui/system";

export const AuthContainer = styled( 'div' )( ( { theme } ) => ( {
    paddingTop: theme.spacing( 2 ),
    '@media (min-width: 500px)': {
        paddingTop: theme.spacing( 4 ),
    },
    '@media (min-width: 1200px)': {
        paddingTop: theme.spacing( 5 ),
    },
} ) );


export const FormBoxContainer = styled( 'div' )( ( { theme } ) => ( {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: theme.dimensions.borderRadius,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing( 2 ),

    '@media (min-width: 500px)': {
        boxShadow: theme.shadows[ 10 ],
    },
} ) );

export const FormBox = styled( 'div' )( ( { theme } ) => ( {
    width: "100%",
    marginTop: theme.spacing( 1 )
} ) );
