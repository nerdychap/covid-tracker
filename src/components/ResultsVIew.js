import React from 'react'
import Page, { Cases, PositiveCases, Recoveries, ActiveCases, RecordedDeaths } from '../styles/HomePageStyling';
import { useContext } from 'react';
import { ResultsData } from './../App';

const ResultsView = () => {
    const { covidResults } = useContext(ResultsData);
    const latestData = covidResults[covidResults.length - 1];
    const { Active, Country, Confirmed, Deaths, Recovered } = latestData;
    return (
        <React.Fragment>
            <Page>
                <h1>{Country}</h1>
                <Cases>
                    <PositiveCases>Positive Cases: {Confirmed}</PositiveCases>
                    <RecordedDeaths >Deaths: {Deaths}</RecordedDeaths>
                    <Recoveries>Recoveries: {Recovered}</Recoveries>
                    <ActiveCases>Active: {Active}</ActiveCases>
                </Cases>
            </Page>
        </React.Fragment>

    );

}

export default ResultsView;