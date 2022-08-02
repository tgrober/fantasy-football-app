import React from 'react';
import pbCrop from '../images/pbCrop.png';
import '../App.css';

export default function SingleTeamCard({arr}) {
    return (
        <>
        <div>
        <ul>
        {arr.map((item, index) => {
          return (
            <div className="teamInfoCard" key={index}>
            {console.log(arr.size)}
            <img className="teamLogo" src={pbCrop} alt="Logo" />
              <h4>Owner: {item.owner}</h4>
              <h4>Points For: {item.pointsFor}</h4>
              <h4>Points Against: {item.pointsAgainst}</h4>
              <h4>Record: {item.record}</h4>
              <h4>PlayoffSeed: {item.playoffSeed}</h4>
              <h4>CurrentProjectedRank: {item.currentProjectedRank}</h4>
              <h4>RankCalculatedFinal: {item.rankCalculatedFinal}</h4>
              <h4>Acquisitions: {item.acquisitions}</h4>
              <h4>Drops: {item.drops}</h4>
              <h4>Trades: {item.trades}</h4>

              <hr />
              </div>
          );
        })}
        </ul>
        </div>
        </>
      );
}
