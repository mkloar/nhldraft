import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fetchMock from 'fetch-mock';
import { act } from 'react-dom/test-utils';
import Player from './Player';
import Searchbox from './SearchBox';

fetchMock.get("https://statsapi.web.nhl.com/api/v1/draft/prospects",
  {
    copyright: "nhl",
    prospects: [
      {
        amateurLeague: {
          link: "",
          name: ""
        },
        amateurTeam: {
          name: "",
          link: ""
        },
        birthCity: "",
        birthDate: "",
        birthStateProvince: "",
        draftStatus: "",
        firstName: "",
        fullName: "",
        height: "",
        id: 11,
        lastname: "",
        link: "",
        primaryPosition: {
          code: "",
          name: "",
          type: "",
          abbreviation: ""
        },
        prospectCategory: {
          id: 1,
          shortName: "",
          name: ""
        },
        ranks: {},
        shootsCatches: "",
        weight: 150
      }
    ]
  }
);


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render player', () => {
  let player = {
    fullName: "full name", 
    country: "slo",
    height: "170", 
    weight: "170", 
    position: "C", 
    birthDay: 24, 
    id: 15
  };

  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<Player 
      fullName={player.fullName}
      country={player.country}
      height={player.height}
      weight={player.weight}
      position={player.position}
      birthDay={player.birthDay}
      id={player.id}
    />, container);
  });
  const playerDivChildrens = container.querySelector('div').children;

  expect(playerDivChildrens[1].textContent).toBe(player.fullName);
  expect(playerDivChildrens[2].textContent).toBe(` ${player.height} - ${player.weight}lbs; ${player.position} ; ${player.birthDay} y/o`);
  expect(playerDivChildrens[3].textContent).toBe(player.country);
});

// Searchbox
it('can render searchbox', () => {
  let searchCategory = "name";
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<Searchbox
      searchCategory={searchCategory}
    />, container);
  });
  const searchboxDiv = container.querySelector('div').children;
  const searchInput = searchboxDiv[0];

  expect(searchInput.placeholder).toBe(`Filter by ${searchCategory}`);
});