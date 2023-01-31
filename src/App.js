import './App.css';
import Login from './auth/Login';
import Register from './auth/Regiser';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom\\";
import CollapsibleExample from './shared/Navbar';
import MovieList from './movie/MoviesList'
import MovieDetails from './movie/MovieDetails';
import NotFound from './shared/NotFound';
import FavoriteMovie from './movie/FavoriteMovie';
import { LangContext } from './Context/LangContext';
import { useState } from 'react';


function App() {
  const [contextLang, setContextLang] = useState("En")

  return (
    <>
      <LangContext.Provider value={{contextLang, setContextLang}}>
        <Router>
          <CollapsibleExample />
          <Switch>

            <Route exact path={'/'} component={MovieList} />

            <Route exact path={'/login'} component={Login} />

            <Route exact path={'/movieDetails/:id'} component={MovieDetails} />
            <Route exact path={'/favorite'} component={FavoriteMovie} />


            <Route exact path={'/register'} component={Register} />
            <Route exact path={'/*'} component={NotFound} />

          </Switch>

        </Router>
      </LangContext.Provider>
    </>
  );
}

export default App;
