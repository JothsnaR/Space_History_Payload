import React from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';

class Home extends React.Component{

    exampleMethod = () => {
        console.log('i am button')
    }

    head = () => {
        return(
            <Helmet>
                <title>Home</title>
            </Helmet>
        )
    }
    render() {
        return (
            <div className="homeContainer">
                {this.head}
                <p>WELCOME TO SPACE DETAILS!</p>
            </div>
        )
    }
}
export default Home;