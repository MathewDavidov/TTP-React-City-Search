import React, { Component } from "react";
import Axios from "axios";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCodes: [],
            city: null
        }
    }

    handleChange = (e) => {
        let city = e.target.value;
        let cityInput = city.toUpperCase();

        if (cityInput.length !== 0) {
            const API_URL = `http://ctp-zip-api.herokuapp.com/city/${cityInput}`;

            Axios.get(API_URL)
                .then((response) => {
                    const data = response.data;
                    let arr = [];

                    for (const i in data) {
                        arr.push(data[i]);
                    }
                    this.setState({ zipCodes: arr });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            this.setState({ zipCodes: [] });
        }
    }

    render() {
        return (
            <>
                <div className="container text-center">
                    <label>City: </label>
                    <input
                        type="text"
                        name="zip"
                        id="inputNumber"
                        onChange={this.handleChange}
                    ></input>
                    {this.state.zipCodes.length !== 0 ? (
                        <div className="jumbotron">
                            <h1 className="display-4">ZIP Codes for input city:</h1>
                            <ul>
                                {this.state.zipCodes.map((zip, i) => (
                                <li key={i}>{zip}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div>No Results</div>
                    )
                    }
                </div>
            </>
        )
    }
} 

export default Search;