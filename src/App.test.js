import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fetchMock from 'fetch-mock';

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
