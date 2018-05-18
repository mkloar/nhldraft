import React, { Component } from 'react';
import PlayerList from './PlayerList';
import SearchBox from './SearchBox';
import SearchCategory from './SearchCategory';

class App extends Component {
  constructor() {
    super();
    this.state={
      players: [],
      searchfield: '',
      category: 'name'
    };
  }

  componentDidMount = () => {
    const prospectsUrl="https://statsapi.web.nhl.com/api/v1/draft/prospects";
    const players1 = [];

    fetch(prospectsUrl)
    .then((resp) => resp.json())
    .then((data) => {
    
    for(let i=0; i < data.prospects.length/10; i++) {
        let fullName1 = data.prospects[i].fullName;
        let height1 = data.prospects[i].height;
        let country1 = data.prospects[i].birthCountry;
        let weight1 = data.prospects[i].weight;
        let position1 = data.prospects[i].primaryPosition.abbreviation;
        let birthDay1= data.prospects[i].birthDate;

        birthDay1 = new Date().getFullYear() - birthDay1.substring(0,4);

        if(country1 === undefined ) {
          country1 = "no data";
        }else if(country1 === "SVN") {
          country1 = "SLO";
        }

        var obj = {
          fullName: fullName1,
          height: height1,
          country: country1,
          weight: weight1,
          position: position1,
          birthDay: birthDay1,
        };
        //console.log(obj);
        players1.push(obj);
        //ul.appendChild(li);
    } 

    console.log(players1);
    this.setState({players: players1});
    });
    //this.setState({players: players1});
    
    //console.log(players1);



  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value });
  }
  onCategoryChange = (event) => {
    this.setState({category: event.target.value});
  }

  whichCategory = (player) => {
    const category = this.state.category;
    if (category === 'country') {
      const location = `${player.country}`;
      return location.slice(0,4).toLowerCase();
    }
    else if (category === 'name') {
      return  player.fullName.toLowerCase();
    }
    else if (category === 'position') {
      return player.position.toLowerCase();
    }
    else {
      return null;
    }
  }

  render() {
    const filteredPlayers1 = this.state.players.filter(player => {
      return player.fullName.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

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
          
          <h1 id="title" className="relative ma0 pa0 fl-l">NHL 2018 draft (only 9000/10 players)</h1>
          <SearchCategory categoryChange={this.onCategoryChange}/>
          <SearchBox searchChange={this.onSearchChange} searchCategory={this.state.category}/>
        </header>

        <main className="flex-auto">
          <PlayerList players={filteredPlayers}/>
        </main>
      
        
      </div>
    );
  }
}

export default App;
