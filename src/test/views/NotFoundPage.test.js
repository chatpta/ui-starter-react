import { render, screen } from "@testing-library/react";
import NotFoundPage from "../../views/NotFoundPage";


test( 'renders NotFound page', () => {
    render( <NotFoundPage/> );
    const linkElement = screen.getByText( /not found 404/i );

    expect( linkElement ).toBeInTheDocument();
} );
