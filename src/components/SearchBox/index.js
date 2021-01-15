import React from "react";
import "./style.css";

function SearchBox(props) {
    return (
        <form className="search">
            <div className="form-group">
                <br />
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Search by name"
                    id="name_search"
                />
            </div>
        </form>
    );
}

export default SearchBox;