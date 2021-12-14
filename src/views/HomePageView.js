import { Link, NavLink } from "react-router-dom";
import React from "react";
import LinkCH from "../components/LinkCH/LinkCH";
import ErrorBoundary from "../ErrorBoundry/ErrorBoundary";
import LandPage from "../pages/landingPage/land/LandPage";
import Header from "../sections/header/Header";

export default function HomePageView() {
    return (
        <React.Fragment>
            <Header/>
            <h1>Home Page</h1>
            <LandPage/>
            <ErrorBoundary>
                <nav
                    style={ {
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem"
                    } }
                >
                    <Link to="/users">Users</Link> | { " " }
                    <Link to="/items">Items</Link> | { " " }
                    <LinkCH page={ "/users" }>Go to Users page</LinkCH> | { " " }
                    <NavLink
                        style={ ( { isActive } ) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "green" : "blue"
                            };
                        } }
                        to={ '/users' }
                    >
                        Nav Link
                    </NavLink>
                </nav>
            </ErrorBoundary>
        </React.Fragment>
    );
}
