import React from "react";
import * as XLSX from "xlsx";
import { keeperData } from "../data/keeperData.js"

const readUploadFile = (e) => {
  e.preventDefault();
  if(e.target.files) {
    const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet);
            console.log(json);
            printKeeperData(json);
        };
        reader.readAsArrayBuffer(e.target.files[0]);

  }
}

function printKeeperData(data) {
  console.log(data.length);

  for(let x = 0 ; x < data.length ; x ++) {
    console.log("printing out data " + data[x]);
    console.log("printing out player " + data[x]["Player"]);
    var playerName = data[x]["Player"];
    var yearsKept = data[x]["Years Kept"];
    var yearsLeft = data[x]["Years Left"];
    var draftRound = data[x]["Player"];
    var playerInfo = {playerName : playerName, yearsKept: yearsKept, yearsLeft: yearsLeft, draftRound: draftRound };
    keeperData.pop(playerInfo);
  }
}

const Keepers = () => {
  return (
    <div>
      <h1 align="center">
        This is the keepers page.
      </h1>
      <div className="table">
        <table align="center">
        <tbody>
          <tr>
            <th>Player</th>
            <th>Years Kept</th>
            <th>Years Left</th>
            <th>Round</th>
            <th>ADP</th>
          </tr>
          {keeperData.map((val,key) => {
            return (
              <tr key={key}>
                <td>{val.player}</td>
                <td>{val.yearsKept}</td>
                <td>{val.yearsLeft}</td>
                <td>{val.draftRound}</td>
              </tr>
            )
          })}
        </tbody>
        </table>
        <form>
          <label htmlFor="upload">Upload File</label>
          <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
          />
        </form>
      </div>
    </div>

  );
};

export default Keepers;
