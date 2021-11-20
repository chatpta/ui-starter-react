import React from 'react';
import ReactDOM from 'react-dom';


import UsersPage from "../../views/UsersPage";


it( 'UserPage renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <UsersPage/>, div );
} );


