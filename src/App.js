import React, { Component } from 'react';
import MultiInput from './multi-input';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar } from 'material-ui';

class App extends Component {
  state = {
    inputValues: ['aff', 'tdd']
  }

  handleInputChange = inputValues => {
    this.setState({ inputValues })
    console.log(inputValues); // eslint-disable-line no-console
  }
  

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            className="app-bar"
            title="Multi Input Demo App"
            showMenuIconButton={ false }
          />
          <div className="app-wrapper">
            <MultiInput
              values={ this.state.inputValues }
              onChange={ this.handleInputChange }
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
