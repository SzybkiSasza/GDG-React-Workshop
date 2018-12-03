import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from '../components/Header/Header';

import './App.css';

class App extends React.Component {
  public render() {
    return (
      <HashRouter>
          <CssBaseline />
          <Header/>
          <section>

          </section>
      </HashRouter>
    );
  }
}

export default App;
