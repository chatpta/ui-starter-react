import TestRenderer from "react-test-renderer";
import LinkCH from "../../../components/LinkCH/LinkCH";
import React from "react";

test( 'Link changes the class when hovered', () => {
    const component = TestRenderer.create(
        <LinkCH page="http://www.facebook.com">Facebook</LinkCH>,
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
