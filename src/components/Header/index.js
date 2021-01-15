import React from "react";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./style.css";

function Header(props) {
    return (
        <Row>
            <Col width={12}>
                <div className='header'>
                    <h1> Employee Directory </h1>
                    <strong>Search by name below. Sort by name or D.O.B. by clicking the heading below.</strong>
                    {props.children}
                </div>
            </Col>
        </Row>
    );
}

export default Header;