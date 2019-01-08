import React, { Component } from 'react';
import './App.css';
import CustomAppBar from "./components/CustomAppBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <React.Fragment>
            <CustomAppBar/>
          </React.Fragment>
        </MuiThemeProvider>
        );
  }
}

export default App;
