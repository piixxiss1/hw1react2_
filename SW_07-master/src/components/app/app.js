import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import  { StarshipsPage, PeoplePage, PlanetsPage } from '../pages';
import SwapiService from '../../services/swapi-service';
import { Provider } from '../swapi-context';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const swapi = new SwapiService()

const App = () => {
  return (
    <div>
      <Provider value={swapi}>
        <Router>
           <Header />
          <RandomPlanet  />

          <Route path='/' exact={true} render={() => <h1>Welcome</h1>}/>
          <Route path='/people/:id?' render={({match, location, history}) => {
            console.log('-->', match);
            const itemId = match.params.id ? match.params.id : 1;
            return <PeoplePage itemId={itemId}/>
          }} component={PeoplePage}/>
          <Route path='/planets/' component={PlanetsPage}/>
          <Route path='/starships/' component={StarshipsPage}/>
        </Router>
         
      </Provider>
    

    </div>
  );
};

export default App;