import React, { Component } from 'react';
import Table, {
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import './ProductsTable.css';


class ProductsTable extends Component {
  render(){
    var listProduct = this.props.data
    return (
      <Paper>
        <Table className="table-cart">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Coments</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Tax</TableCell>
              <TableCell>Total item</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {listProduct.map(product => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.coments}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.tax}</TableCell>
                <TableCell>{product.total}</TableCell>
              </TableRow>
              )
          })}
          </TableBody>
        </Table>
        </Paper>
    )
  }
};

export default ProductsTable;