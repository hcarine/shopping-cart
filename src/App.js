import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import Delete from 'material-ui-icons/Delete';
import AddShoppingCartIcon from 'material-ui-icons/AddShoppingCart';

import ProductsTable from './ProductsTable'
import SimpleMediaCard from './SimpleMediaCard'
import Product from './Product'
import './App.css';

class App extends Component {

   constructor(props) {
    super(props)
    this.state = {
      open: false,
      selectedValue: null,
      productList: []
    };
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleClose =this.handleClose.bind(this)
    this.handleClickDelete =this.handleClickDelete.bind(this)
  }
 
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose(value) {
    this.state.productList.push(value)
    this.setState({ selectedValue: value, open: false, productList: this.state.productList });
  };
  handleClickDelete(){
    this.setState({
      productList:[]
    })
  }

  render() {
     var classes= PropTypes.object.isRequired
    return (
      <MuiThemeProvider className="App" >
        <h1>Your Cart</h1>

        <div className="aling_right">
          <Button className={classes.button} raised color="accent" onClick={this.handleClickDelete}>
            <Delete className={classes.leftIcon} />
            Clear card
          </Button>
          <Button className={classes.button} raised color="primary" onClick={this.handleClickOpen}>
            <AddShoppingCartIcon />
            Add new product
          </Button>
        </div>

        <ProductsTable data={this.state.productList}></ProductsTable>

        <SimpleMediaCard></SimpleMediaCard>

        <Product
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
        />

      </MuiThemeProvider>
    );
  }
}

export default App;