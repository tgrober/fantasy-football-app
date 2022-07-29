import React from 'react';
import pbCrop from '../images/pbCrop.png';
import '../App.css';
import { seasonResult2018 } from '../data/seasonResult2018.js';
import { addSum, someData } from '../data/math.js';
import { teamOwnerMap } from '../constants/teamOwnerMap.js'
import { endpoints } from '../constants/endpoints.js'
import * as readJSON from '../functions/readJSON.js'

let draftDetailEndpoint = endpoints['draftDetailEndpoint'];
let previousYearEndpoint = endpoints['previousYearEndpoint'];
let teamInfo;
let teamInfoArray = readJSON.getTeamsArray(); //= readJSON.getTeamsArray();

function buttonClick() {
  console.log('You clicked me!');
  // could have button refresh data?
  // teamInfoArray = readJSON.getTeamsArray();
  console.log("in teaminfocard  ")
  console.log(teamInfoArray)
}

export default class TeamInfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error : null,
      isLoaded : false,
      items: [],
      teamInfo: []
    };
  }

  componentDidMount() {

    // Simple GET request using fetch
   fetch(previousYearEndpoint)
       .then(response => response.json())
       .then(data => this.setState({ items: data, isLoaded: true, teamInfo: teamInfoArray}));
  }
  render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <>
          <button onClick={buttonClick}>Button</button>
          <div>
          <ul>
          {teamInfoArray.map(item => {
            return (
              <div className="teamInfoCard" key={item}>
              <img className="teamLogo" src={pbCrop} alt="Logo" />
                <h4>Owner: <h5 className="teamStatLine">{item.owner}</h5></h4>
                <h4>Points For: <h5 className="teamStatLine">{item.pointsFor}</h5></h4>
                <h4>Points Against: <h5 className="teamStatLine">{item.pointsAgainst}</h5></h4>
                <h4>Record: <h5 className="teamStatLine">{item.record}</h5></h4>
                <h4>PlayoffSeed: <h5 className="teamStatLine">{item.playoffSeed}</h5></h4>
                <h4>CurrentProjectedRank: <h5 className="teamStatLine">{item.currentProjectedRank}</h5></h4>
                <h4>RankCalculatedFinal: <h5 className="teamStatLine">{item.rankCalculatedFinal}</h5></h4>
                <h4>Acquisitions: <h5 className="teamStatLine">{item.acquisitions}</h5> </h4>
                <h4>Drops: <h5 className="teamStatLine">{item.drops}</h5></h4>
                <h4>Trades: <h5 className="teamStatLine">{item.trades}</h5></h4>

                <hr />
              </div>
            );
          })}
          </ul>
          </div>
          </>
        );
      }
    };
  }
