import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import { render, screen } from "@testing-library/react";

import App from "../../App/App";
import UsersPage from "../../views/UsersPage";
// import { act } from 'react-dom/test-utils';

it( 'UserPage renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <UsersPage/>, div );
} );

test( 'renders home page link', () => {
    render( <App/> );
    const linkElement = screen.getByText( /users/i );
    expect( linkElement ).toBeInTheDocument();
} );


const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

const Link = ( { page, children } ) => {
    const [ status, setStatus ] = useState( STATUS.NORMAL );

    const onMouseEnter = () => {
        setStatus( STATUS.HOVERED );
    };

    const onMouseLeave = () => {
        setStatus( STATUS.NORMAL );
    };

    return (
        <a
            className={ status }
            href={ page || '#' }
            onMouseEnter={ onMouseEnter }
            onMouseLeave={ onMouseLeave }
        >
            { children }
        </a>
    );
};


test( 'Link changes the class when hovered', () => {
    const component = TestRenderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>,
    );
    let tree = component.toJSON();
    expect( tree ).toMatchSnapshot();

    TestRenderer.act( () => {
        // manually trigger the callback
        tree.props.onMouseEnter();
    } );

    // re-rendering
    tree = component.toJSON();
    expect( tree ).toMatchSnapshot();

    TestRenderer.act( () => {
        // manually trigger the callback
        tree.props.onMouseLeave();
    } );

    // re-rendering
    tree = component.toJSON();
    expect( tree ).toMatchSnapshot();
} );
