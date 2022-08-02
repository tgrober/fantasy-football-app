import { seasonResult2018 } from '../data/seasonResult2018.js';
import { seasonResult2019 } from '../data/seasonResult2019.js';
import { teamOwnerMap } from '../constants/teamOwnerMap.js'

const teamInfo = [];

export function getTeamsArray(year) {
  let ownerCount = 0;
  if(year === "2018") {
    for (let i = 0 ; i <  seasonResult2018["teams"].length ; i++) {
      let team = seasonResult2018["teams"][i]
      let owner = mapOwner(team);
      if(owner) {
        ownerCount += 1;
        let teamObject = {
          "id":null,
          "owner": null,
          "pointsFor" : null,
          "pointsAgainst" : null,
          "wins" : null,
          "losses" : null,
          "record" : null,
          "draftDayProjectedRank" : null,
          "currentProjectedRank" : null,
          "rankCalculatedFinal" : null,
          "acquisitions" : null,
          "drops" : null,
          "trades" : null,
          "playoffSeed" : null
        };
        teamObject["owner"] = mapOwner(team);
        teamObject["id"] = ownerCount;
        teamObject["pointsFor"] = team["points"].toFixed(2);
        teamObject["pointsAgainst"] = team["record"]["overall"]["pointsAgainst"].toFixed(2);

        teamObject["wins"] = team["record"]["overall"]["wins"];
        teamObject["losses"] = team["record"]["overall"]["losses"]

        teamObject["record"] = teamObject["wins"] + "-" + teamObject["losses"]

        teamObject["draftDayProjectedRank"] = team["draftDayProjectedRank"];
        teamObject["playoffSeed"] = team["playoffSeed"];
        teamObject["currentProjectedRank"] = team["currentProjectedRank"];
        teamObject["rankCalculatedFinal"] = team["rankCalculatedFinal"];
        teamObject["acquisitions"] = team["transactionCounter"]["acquisitions"];
        teamObject["drops"] = team["transactionCounter"]["drops"];
        teamObject["trades"] = team["transactionCounter"]["trades"]

        teamInfo.push(teamObject);
        // putTeamInfoIntoArray(teamInfo, ownerCount, team);
      }
    }
  } else if (year === "2019") {
    for (let i = 0 ; i <  seasonResult2019["teams"].length ; i++) {
      let team = seasonResult2019["teams"][i]
      let owner = mapOwner(team);
      if(owner) {
        ownerCount += 1;
        let teamObject = {
          "id":null,
          "owner": null,
          "pointsFor" : null,
          "pointsAgainst" : null,
          "wins" : null,
          "losses" : null,
          "record" : null,
          "draftDayProjectedRank" : null,
          "currentProjectedRank" : null,
          "rankCalculatedFinal" : null,
          "acquisitions" : null,
          "drops" : null,
          "trades" : null,
          "playoffSeed" : null
        };
        teamObject["owner"] = mapOwner(team);
        teamObject["id"] = ownerCount;
        teamObject["pointsFor"] = team["points"].toFixed(2);
        teamObject["pointsAgainst"] = team["record"]["overall"]["pointsAgainst"].toFixed(2);

        teamObject["wins"] = team["record"]["overall"]["wins"];
        teamObject["losses"] = team["record"]["overall"]["losses"]

        teamObject["record"] = teamObject["wins"] + "-" + teamObject["losses"]

        teamObject["draftDayProjectedRank"] = team["draftDayProjectedRank"];
        teamObject["playoffSeed"] = team["playoffSeed"];
        teamObject["currentProjectedRank"] = team["currentProjectedRank"];
        teamObject["rankCalculatedFinal"] = team["rankCalculatedFinal"];
        teamObject["acquisitions"] = team["transactionCounter"]["acquisitions"];
        teamObject["drops"] = team["transactionCounter"]["drops"];
        teamObject["trades"] = team["transactionCounter"]["trades"]

        teamInfo.push(teamObject);
        // putTeamInfoIntoArray(teamInfo, ownerCount, team);
      }
    }
    console.log("Owner count = " + ownerCount);
  }
  return teamInfo;
}

 function mapOwner(team) {
   let ownerKey = team["owners"];
   return teamOwnerMap[ownerKey] ? teamOwnerMap[ownerKey] : console.log(ownerKey);
 }
 // extracted function into getTeamsArray because had issue with array
 // adding in duplicates
 
 // function putTeamInfoIntoArray(teamInfo, id, team) {
 //   let teamObject = {
 //     "id":null,
 //     "owner": null,
 //     "pointsFor" : null,
 //     "pointsAgainst" : null,
 //     "wins" : null,
 //     "losses" : null,
 //     "record" : null,
 //     "draftDayProjectedRank" : null,
 //     "currentProjectedRank" : null,
 //     "rankCalculatedFinal" : null,
 //     "acquisitions" : null,
 //     "drops" : null,
 //     "trades" : null,
 //     "playoffSeed" : null
 //   };
 //   teamObject["owner"] = mapOwner(team);
 //   teamObject["id"] = id;
 //   teamObject["pointsFor"] = team["points"];
 //   teamObject["pointsAgainst"] = team["record"]["overall"]["pointsAgainst"].toFixed(2);
 //
 //   teamObject["wins"] = team["record"]["overall"]["wins"];
 //   teamObject["losses"] = team["record"]["overall"]["losses"]
 //
 //   teamObject["record"] = teamObject["wins"] + "-" + teamObject["losses"]
 //
 //   teamObject["draftDayProjectedRank"] = team["draftDayProjectedRank"];
 //   teamObject["playoffSeed"] = team["playoffSeed"];
 //   teamObject["currentProjectedRank"] = team["currentProjectedRank"];
 //   teamObject["rankCalculatedFinal"] = team["rankCalculatedFinal"];
 //   teamObject["acquisitions"] = team["transactionCounter"]["acquisitions"];
 //   teamObject["drops"] = team["transactionCounter"]["drops"];
 //   teamObject["trades"] = team["transactionCounter"]["trades"]
 //
 //   teamInfo.push(teamObject);
 // }
