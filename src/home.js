import React from "react";
import './home.css';
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";

const Home = () => {
    return (  
        <div className="home">
            <div className="home_welcome"><h1>Welcome to Pranav's Covid Tracker</h1></div>
            <br />
            <br />
            <div className="button"></div>
                <Link to="/app">
                    <Button variant="contained" color="primary" style={{color : "antiquewhite", fontSize:"30px", display:"flex",
                        justifyContent :"center", alignItems:"center", marginLeft:"50%", fontWeight:"bold"
                    }}>
                        Let's Go
                    </Button>
                </Link>
        </div>
    );
}
 
export default Home;