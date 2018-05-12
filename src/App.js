import React, { Component } from 'react';
import './App.css';
import TodoList from './multi-input';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            className="app-bar"
            title="Tennivalók"
            showMenuIconButton={ false }
          />
          <div className="App-wrapper">
            <TodoList />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
