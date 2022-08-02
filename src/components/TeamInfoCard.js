import React from 'react';
import '../App.css';
import { endpoints } from '../constants/endpoints.js'
import * as readJSON from '../functions/readJSON.js'
import SingleTeamCard from '../components/SingleTeamCard';

export default class TeamInfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error : null,
      isLoaded : false,
      teamInfo: []
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true, error: false});
    console.log("TeamInfoCard component mounted");
  }
  render() {
      const { error, isLoaded } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <>
          <div>

          </div>
          </>
        );
      }
    };
  }
