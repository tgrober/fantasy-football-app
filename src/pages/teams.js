import React from 'react';
import TeamInfoYearSelector from '../components/TeamInfoYearSelector';
import Footer from '../components/Footer';
import {Styles} from '../constants/styles.js';

const Teams = () => {

    return (
      <div>
        <h1>All the current and previous teams in the league!</h1>
        {/* <TeamInfoCardComp /> */}
        {/* should maybe just make a team component and repeat? */}

         <Styles>
         <TeamInfoYearSelector/>
         <Footer/>
         </Styles>
      </div>
    );
};

export default Teams;
