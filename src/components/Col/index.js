import React from "react";

function Col(props) {
    return <div className={`col-${props.width} ${props.justify}`}>
        {props.children}
    </div>;
}

export default Col;