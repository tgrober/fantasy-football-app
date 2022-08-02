import React, {useState, useEffect} from 'react';
import {testData1} from '../data/testData1.js'; // testData1 = 2018
import {testData2} from '../data/testData2.js'; // testData1 = 2019
import Table from '../components/Table';
import {columns} from '../constants/columns.js';


function TeamInfoYearSelector() {
  // sets the inital value of state variable teamInfo to 2018 year
  const [seasonYear, setseasonYear] = useState("2018");
  // const [seasonYearData, setseasonYearData] = useState(testData1);

  useEffect( () => {
    console.log("test for use effect");
    setseasonYear(seasonYear);
    // setseasonYearData(readJSON.getTeamsArray(seasonYear));
  }, [seasonYear]);

  const handleChange = (e) => {
    setseasonYear(e.target.value);
  };

  function retValue(seasonYear) {
    if(seasonYear.seasonYear === '2018') {
      return (
        <Table
          data={testData1}
          columns={columns}/>
        );
    } else if(seasonYear.seasonYear === '2019') {
      return (
        <Table
          data={testData2}
          columns={columns}/>
        );
    }
  }

  return (
        <>
        <form>
        <label>
          Pick the year you would like to view stats:
          <select value={seasonYear} onChange={handleChange}>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
          </select>
        </label>
        </form>
        <h1>You chose {seasonYear} season data</h1>
        {retValue({seasonYear})}
        </>
        );

  };

  export default TeamInfoYearSelector;
