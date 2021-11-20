import TestRenderer from "react-test-renderer";
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LinkCH from "../../../components/LinkCH/LinkCH";
import React from "react";
import { BrowserRouter } from "react-router-dom";


test( 'LinkCH renders', () => {
    render( <LinkCH page="/items">Items page</LinkCH>, { wrapper: MemoryRouter } );

    expect( screen.getByText( /items/i ) ).toBeInTheDocument();

    console.log( screen.getByText( /items/i ).classList.toString() )

    userEvent.hover( screen.getByText( /items/i ) );

    console.log( screen.getByText( /items/i ).classList.toString() )

    userEvent.click( screen.getByText( /items/i ) );

} );

// test( 'LinkCH changes the class when hovered', () => {
//     const component = TestRenderer.create(
//         <BrowserRouter>
//             <LinkCH page="/items">Items page</LinkCH>,
//         </BrowserRouter>
//     );
//     let tree = component.toJSON();
//     expect( tree ).toMatchSnapshot();
//     console.log(tree)
//
//     TestRenderer.act( () => {
//         // manually trigger the callback
//         tree.type.onMouseEnter();
//     } );
//
// re-rendering
// tree = component.toJSON();
// expect( tree ).toMatchSnapshot();
// console.log(tree)
//
// TestRenderer.act( () => {
//     // manually trigger the callback
//     tree.props.onMouseLeave();
// } );
//
// // re-rendering
// tree = component.toJSON();
// expect( tree ).toMatchSnapshot();
// } );
