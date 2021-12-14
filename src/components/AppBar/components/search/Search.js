import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import useSearchStyle from "./searchStyles";

export default function Search() {

    const classes = useSearchStyle();

    return (
        <div className={ classes.search }>
            <div className={ classes.searchIcon }>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                classes={ {
                    root: classes.inputRoot,
                    input: classes.inputInput,
                } }
                inputProps={ { 'aria-label': 'search' } }
            />
        </div>
    );
};