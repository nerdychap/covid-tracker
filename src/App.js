import React from 'react';
import './App.css';
import ResultsView from './components/ResultsVIew';
import CountryInput from './components/CountryInput';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { createContext } from 'react';
import Page from './styles/HomePageStyling';

export const ResultsData = createContext([]);

const App = () => {
  const [covidResults, setResult] = useState([]);
  const [country, setCountry] = useState('South Africa');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get(`https://api.covid19api.com/live/country/${country}/status/confirmed`)
      .then((result) => {
        setResult(result.data);
        setIsLoaded(true);
      }, (error) => {
        console.log(error);
        setError(error);
      })

  }, [country]);

  const countryChange = (country) => {
    setCountry(country);
  };
  if (error) {
    return <h1>{error.message}</h1>
  }
  else if (!isLoaded) {
    return <Page><h1>Loading...</h1></Page>
  }
  return (
    <>
      <ResultsData.Provider value={covidResults}>
        <CountryInput onCountryChange={countryChange} country={country} />

        <ResultsView />

      </ResultsData.Provider>
    </>
  )

}

export default App;
