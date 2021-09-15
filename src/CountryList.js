import React from 'react';
import Country from './Country';
import './countrylist.css';
const CountryList = ({ stats }) => {

    // console.log("STATS", stats);

    return (
        <div className='countrylist'>
            {
                stats.map(country =>
                    // console.log(country.name, country.value, country.vaccinations, country.Date)
                    <Country
                        name={country.name}
                        code={country.value}
                        vaccinations={country.vaccinations}
                        today={country.Date}
                    />
                    // console.log(country)
                )
            }
        </div>
    )
}
export default CountryList;