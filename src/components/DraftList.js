import React from 'react';
import Axios from 'axios';
let endpoint = `https://jsonplaceholder.typicode.com/users`;

export default class DraftList extends React.Component {
  state = {
    persons : [],
    isLoaded : false,
    error : null,
    request : []
  }

  componentDidMount() {
    Axios.get(endpoint)
      .then(res => {
        const persons = res.data;
        const request = res.request;
        const error = false;
        this.setState({ persons, request,error});
      })
  }

  render() {
    return (
      <>
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
          )
        }
      </ul>
      <ul>
        {
          this.state.request.status
        }
      </ul>
      </>
    )
  }
}
