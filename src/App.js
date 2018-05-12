import React, { Component } from 'react';
import './App.css';
import MultiInput from './multi-input';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';

class App extends Component {
  state = {
    inputValues: [
      {id: 'aaa', value: 'bbb'},
      {id: 'ccc', value: 'bbb'},
    ]
  }

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
            <MultiInput
              values={ this.state.inputValues }
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
