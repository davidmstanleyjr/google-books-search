import React from "react";

//this exprorts the Container, Row, and Column components from this file

//this Container component allows me to use a bootstrap container without having to worry about class names
export function Container({ fluid, children }) {
    return <div className={`container${ fluid ? "-fluid" : "" }`}>{children}</div>;
}


//same for this one
export function Row({ fluid, children }) {
    return <div className={`row${ fluid ? "-fluid" : "" }`}>{children}</div>;
}


//this Col component lets us size bootstrap columns with less syntax
// for example <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
    return (
        <div
            className={size
                .split(" ")
                .map(size => "col-" + size)
                .join(" ")}
        >
            {children}
        </div>
    );
}