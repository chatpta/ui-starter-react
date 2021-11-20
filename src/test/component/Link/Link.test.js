import TestRenderer from "react-test-renderer";
import Link from "../../../components/Link/Link";
import React from "react";

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
