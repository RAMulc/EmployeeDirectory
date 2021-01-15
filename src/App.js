import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import EmpIndex from "./pages/EmpIndex";
import Container from "./components/Container";

function App() {
    return (
        <Router>
            <Container>
                <Header />
                <Wrapper>
                    <Route exact path="/" component={EmpIndex} />
                </Wrapper>
            </Container>
        </Router>
    );
}

export default App;
