import styled from "@emotion/styled";

export const DisplayBelow900px = styled( 'div' )( ( { theme } ) => ( {
    width: "100%",
    '@media (min-width: 900px)': {
        display: "none",
    },
} ) );

export const DisplayAbove900px = styled( 'div' )( ( { theme } ) => ( {
    width: "100%",
    '@media (max-width: 900px)': {
        display: "none",
    },
} ) );
