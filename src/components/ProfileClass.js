import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        //Creating State
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Loaction",
            },
        };
        console.log("Child - Constructor "+ this.props.name);
    }

    //This will called after render() - Constructor > Render > ComponentDidMount
    async componentDidMount() {
        //API Call
        const data = await fetch("https://api.github.com/users/ajitkumar20");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log("Child - ComponentDidMount "+ this.props.name);
    }

    render() {
        console.log("Child - Render "+ this.props.name);

        //We can destructure also
        // const {count} = this.state;
        return (
            <div>
                <h2>Profile Class Components</h2>
                <img src={this.state.userInfo.avatar_url}/>
                <h3>Name: {this.state.userInfo.name}</h3>
                <h3>Location: {this.state.userInfo.location}</h3>
            </div>
        );
    };
};

export default Profile;