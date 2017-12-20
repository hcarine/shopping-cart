import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class Product extends Component {

 constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleListItemClick =this.handleListItemClick.bind(this)
  }

  handleClose () {
    this.props.onClose(this.getProductData());
  };

  handleListItemClick () {
    this.props.onClose(this.getProductData());
  };
  getProductData(){
    //let id = this.props.selectedValue ? this.props.selectedValue.id : parseInt(Math.random() * 10)
    let id = parseInt( Math.random() * 10)
    return {
      id: id,
      name: document.querySelector('#name').value,
      coments: document.querySelector('#coments').value,
      price: document.querySelector('#price').value,
      tax: document.querySelector('#tax').value,
      total: document.querySelector('#total').value
    }
  }

  render() {
    //const { classes, onClose, selectedValue, ...other } = this.props;
    const { classes, onClose, ...other } = this.props;

    return (
      <Dialog fullScreen={this.props.fullScreen} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other} >
        <DialogTitle id="simple-dialog-title">New Product</DialogTitle>
        <div>
          <TextField
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="coments"
              label="Coments"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="price"
              label="Price"
              type="number"
              fullWidth
            />
            <TextField
              margin="dense"
              id="tax"
              label="Tax(%)"
              type="number"
              fullWidth
            />
            <TextField
              margin="dense"
              id="total"
              label="Total"
              type="number"
              fullWidth
            />
            <Button raised color="primary" onClick={this.handleListItemClick}>
              Save
            </Button>
        </div>
      </Dialog>
    );
  }
}

Product.propTypes = {
  onClose: PropTypes.func,
  /*selectedValue: PropTypes.string,*/
  fullScreen: PropTypes.bool,
};


export default Product
