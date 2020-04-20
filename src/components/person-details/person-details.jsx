import React, {PureComponent} from 'react';
import './person-details.css';

import ApiService from '../../services/api-service';
import {getContent} from '../../utils/utils';
import ErrorButton from '../error-button/error-button';

export default class PersonDetails extends PureComponent {

  _apiService = new ApiService();

  state = {
    person: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this._updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      this.setState({loading: true});
      this._updatePerson();
    }
  }

  _updatePerson() {
    const {personId} = this.props;

    if (personId === null) {
      return;
    }

    this._apiService
      .getPerson(personId)
      .then((person) => this.setState({person, loading: false}))
      .catch(this._onError);
  }

  _onError = () => {
    this.setState({error: true, loading: false});
  };

  render() {
    const {person, loading, error} = this.state;

    if (person === null) {
      return (
        <div className="person-details card">
          <span>Selected a person from a list</span>
        </div>
      );
    }

    const content = getContent(loading, error, React.memo(PersonDetailsView), person);

    return (
      <div className="person-details card">
        {content}
      </div>
    );
  }
}


const PersonDetailsView = ({id, name, gender, birthYear, eyeColor}) => {

  return (
    <React.Fragment>
      <img className="person-image"
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
            alt="person" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};