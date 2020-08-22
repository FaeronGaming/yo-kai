import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { LocationLookup } from './components/LocationLookup';
import { Hero } from './layout/Hero';
import { Tile } from './layout/Tile';
import { UserDataProvider } from './state/userDataContext';

function Navigation() {
  return (
    <Tile isAncestor>
      <Tile isParent>
        <Tile
          as={Link}
          to="/yo-kai/minion-location-lookup"
          isChild
          className="is-4 box"
          title="Minion Location Lookup"
        />
        <Tile
          as={Link}
          to="/yo-kai/configure"
          isChild
          className="is-4 box"
          title="Configure"
        />
      </Tile>
    </Tile>
  );
}

function App() {
  return (
    <UserDataProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/yo-kai">
          <Hero title="Yo-kai Event Tools" href="/yo-kai" />
            <Switch>
              <Route path="/yo-kai/minion-location-lookup">
                <LocationLookup />
              </Route>
              <Route path="/yo-kai/configure">
                <>Placeholder</>
              </Route>
              <Route path="/">
                <Navigation />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserDataProvider>
  );
}

export default App;
