import { Link } from "react-router-dom";
import React from "react";

export default function HomePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <nav
                style={ {
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem"
                } }
            >
                <Link to="/users">Users</Link> | { " " }
                <Link to="/items">Items</Link>
            </nav>
        </div>
    );
}
