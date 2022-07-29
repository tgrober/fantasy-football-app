import React from 'react';
import TeamInfoCard from '../components/TeamInfoCard';
import DraftList from '../components/DraftList';


const Teams = () => {
  return (
    <div>
      <h1>All the current and previous teams in the league!</h1>
      <TeamInfoCard />
      {/* should maybe just make a team component and repeat? */}
      
    </div>
  );
};

export default Teams;
