import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import Delete from 'material-ui-icons/Delete';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';
import IconButton from 'material-ui/IconButton';

import ProductsTable from './ProductsTable'
import SimpleMediaCard from './SimpleMediaCard'
import './App.css';

class App extends Component {

  render() {
     var classes= PropTypes.object.isRequired
    return (
      <MuiThemeProvider className="App" >
        <h1>Your Cart</h1>

        <div className="aling_right">
          <Button className={classes.button} raised color="accent">
            <Delete className={classes.leftIcon} />
            Clear card
          </Button>
          <Button className={classes.button} raised color="primary">
            <AddShoppingCartIcon />
            Add new product
          </Button>
        </div>

        <ProductsTable></ProductsTable>

        <SimpleMediaCard></SimpleMediaCard>

      </MuiThemeProvider>
    );
  }
}

export default App;