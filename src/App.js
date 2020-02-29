import React, { Component } from 'react';
import PlayerList from './PlayerList';
import SearchBox from './SearchBox';
import SearchCategory from './SearchCategory';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      searchfield: '',
      category: 'name'
    };
  }

  componentDidMount = () => {
    const prospectsUrl = "https://statsapi.web.nhl.com/api/v1/draft/prospects";
    const playersList = [];

    fetch(prospectsUrl)
      .then((resp) => resp.json())
      .then((data) => {

        for (let i = 0; i < data.prospects.length / 10; i++) {
          let fullName = data.prospects[i].fullName;
          let height = data.prospects[i].height;
          let country = data.prospects[i].birthCountry;
          let weight = data.prospects[i].weight;
          let position = data.prospects[i].primaryPosition.abbreviation;
          let birthDay = data.prospects[i].birthDate;

          birthDay = new Date().getFullYear() - birthDay.substring(0, 4);

          if (country === undefined) {
            country = "no data";
          } else if (country === "SVN") {
            country = "SLO";
          }

          var player = {
            fullName,
            height,
            country,
            weight,
            position,
            birthDay
          };
          playersList.push(player);
        }

        this.setState({ players: playersList });
      });

  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }
  
  onCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  }

  whichCategory = (player) => {
    const category = this.state.category;
    if (category === 'country') {
      const location = `${player.country}`;
      return location.slice(0, 4).toLowerCase();
    }
    else if (category === 'name') {
      return player.fullName.toLowerCase();
    }
    else if (category === 'position') {
      return player.position.toLowerCase();
    }
    else {
      return null;
    }
  }

  render() {
    const filteredPlayers = this.state.players.filter(player => {
      const category = this.whichCategory(player);
      if (category !== undefined) {
        return category.includes(this.state.searchfield.toLowerCase());
      }
      else {
        return null;
      }
    });

    return (
      <div className="tc">
        <header className="custom--unselectable fixed top-0 w-100 h3 white custom--bg-near-black custom--shadow-4 z-2">
          <h1 id="title" className="relative ma0 pa0 fl-l">NHL draft players</h1>
          <SearchCategory categoryChange={this.onCategoryChange} />
          <SearchBox searchChange={this.onSearchChange} searchCategory={this.state.category} />
        </header>
        <main className="flex-auto">
          <PlayerList players={filteredPlayers} />
        </main>
      </div>
    );
  }
}

export default App;
