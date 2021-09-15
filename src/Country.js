import React from 'react';
import './country.css';
const Country = (props) => {

    // console.log("FINAL", props);

    return (
        <div className='country'>
            <img src={`https://www.countryflags.io/${props.code}/shiny/64.png`}></img>
            <h2>{props.name}</h2>
            <div className='describe' style={{ marginBottom: "8px", color: "white" }}>
                <p style={{ fontWeight: 'bold' }}>{`Vaccinations: ${props.vaccinations}`}</p>
                <p style={{ fontWeight: 'bold' }}>{`Latest update by: ${props.today}`}</p>
            </div>
        </div >
    );
}

export default Country;