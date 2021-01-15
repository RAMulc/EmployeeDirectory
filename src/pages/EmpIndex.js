import React, { Component } from "react";
import API from "../utils/API";
// import sampleData from "../utils/data.json";
import SearchBox from "../components/SearchBox";
import EmpTable from "../components/EmpTable";
import Col from "../components/Col";
import Row from "../components/Row";

class EmpIndex extends Component {
    state = {
        results: [],
        search: "",
        err: ""
    };

    origData = [];

    componentDidMount() {
        API.getUsers()
            .then((res) => {
                this.origData = res.data.results;
                this.setState({ results: this.GetElements(res.data.results) });
            })
            .catch(err => console.log(err));

        // this.origData = sampleData.results;
        // this.setState({ results: this.GetElements(sampleData.results) });
    }

    GetElements(rawData) {
        const slimData = rawData.map((ele, index) => {
            return {
                id: index,
                image: ele.picture.thumbnail,
                name: ele.name.first + ' ' + ele.name.last,
                phone: ele.phone,
                email: ele.email,
                dob: ele.dob.date
            };
        });
        return slimData;
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        console.log("Changed", event.target.value);
        if (event.target.value === "") {
            console.log("null: ", event.target.value);
            this.setState({ results: this.GetElements(this.origData) });
        }
        else {
            const tData = this.GetElements(this.origData);
            const filteredResults = tData.filter(
                emp => emp.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
            this.setState({ results: filteredResults });
        }

    };

    render() {
        return (
            <div>
                <Row>
                    <Col width={12} justify={'align-self-center'}>
                        <SearchBox
                            handleInputChange={this.handleInputChange}
                            name={this.state.search}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col width={12} justify={'align-self-start'}>
                        <EmpTable DataTable={this.state.results} />
                    </Col>
                </Row>

            </div>
        );
    }
}

export default EmpIndex;
