import React, { Component } from 'react';
import API from './utils/API';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    search: '',
    results: [],
    cost: {},
    info: {},
    accommodations: {},
    highlights: {}
  };

  handleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    API.getCities(this.state.search)
      .then(({ data }) => this.setState({ results: data.data }))
      .catch(err => console.log(err))
  }

  handleCity = (city) => {
    API.getCost(city)
      .then(({ data }) => {
        this.setState({
          cost: data.data.costs[data.data.costs.length - 1],
          info: data.data.info
        })

        API.getAccommodations(city)
          .then(({ data }) => {
            this.setState({
              accommodations: data.data
            })

            API.getHighlights(city)
              .then(({ data }) => {
                this.setState({
                  highlights: data.data
                })
              })
          })
      })
      .catch(err => console.log(err))
    // API.getAllCityInfo(city)
    //   .then(data => {
    //     console.log(data)
    //   })
  }

  render() {

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search">Enter City: </label>
            <input
              id="search"
              type="text"
              name='search'
              value={this.state.search}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.search}</p>
          <ul>
            {this.state.results ?
              this.state.results.map(city => {
                return <li><button onClick={() => this.handleCity(city.geonameid)}>{city.asciiname}</button></li>
              })
              :
              null}
          </ul>

        </header>

      </div>
    );
  }
}

export default App;
