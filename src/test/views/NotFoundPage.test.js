import { render, screen } from "@testing-library/react";
import NotFoundPage from "../../views/NotFoundPage";


test( 'NotFound page contains element', () => {
    render( <NotFoundPage/> );
    const element = screen.getByText( /not found 404/i );

    expect( element ).toBeInTheDocument();
} );
