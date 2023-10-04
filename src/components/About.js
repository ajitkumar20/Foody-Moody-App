import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";


class About extends Component {
    constructor(props) {
        super(props);
        console.log("parent - constructor");
    }

    componentDidMount() {
        //Best place to make API call
        console.log("parent - componentDidMount");
    }

    render() {
        console.log("parent - render");
        return (
            <div>
                <h1>About Us Page</h1>
                <p>This is the Namaste React Live Course chapter-7 - Finding The Path 🚀</p>
                {/* <Outlet/> */}
                <Profile name = {"First Child"}/>
            </div>
        );
    };
}

export default About;