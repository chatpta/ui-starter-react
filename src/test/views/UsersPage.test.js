import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from "@testing-library/react";

import App from "../../App/App";
import UsersPage from "../../views/UsersPage";


it( 'UserPage renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <UsersPage/>, div );
} );

test( 'renders home page link', () => {
    render( <App/> );
    const linkElement = screen.getByText( /users/i );
    expect( linkElement ).toBeInTheDocument();
} );

