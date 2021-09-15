import React, { useState, useEffect } from "react";
import './Vaccinestat.css';
import {
    MenuItem,
    FormControl,
    Select,
} from "@material-ui/core";
import CountryList from './CountryList';
import { getCurrentDate } from './util';

const VaccineStat = (props) => {

    const [country, setcountry] = useState("worldwide");
    const [vcountries, setVcountries] = useState([]);
    const [soloCountry, setsoloCountry] = useState([]);

    const today = getCurrentDate();

    const countries = props.location.vaccineProps.countries.countries;
    const countryVaccineStat = props.location.vaccineProps.countryVaccineStat.countryVaccineStat;

    // console.log(today);

    const onCountryChange = (e) => {
        setcountry(e.target.value);

        const filteredCountries = vcountries.map(country => {

            let tempArray = [];

            if (country.value === e.target.value) {
                tempArray.push(country);
                setsoloCountry(tempArray);
            }
        });

        // console.log(soloCountry);
    }

    useEffect(() => {

        let i = 0;

        let tempArray = [];

        const updateCountries = countries.map(country => {

            if (countryVaccineStat[i]) {
                country["vaccinations"] = (countryVaccineStat[i].timeline[today]).toString();
                country["Date"] = today;
                i += 1;

                tempArray.push(country);
            }
        });

        setVcountries(tempArray);

    }, [])

    console.log("PK", vcountries);

    return (
        <div className="app">
            <div className="app__left">
                <div className="app__header">
                    <h1>Vaccine Tracker</h1>
                    <FormControl className="app__dropdown">
                        <Select
                            variant="outlined"
                            value={country}
                            onChange={onCountryChange}
                        >
                            <MenuItem value="worldwide">Worldwide</MenuItem>
                            {vcountries.map((country) => (
                                <MenuItem value={country.value}>{country.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                {country !== "worldwide" ? < CountryList stats={soloCountry} /> : <CountryList stats={countries} />}
            </div>
        </div>
    );
}

export default VaccineStat;