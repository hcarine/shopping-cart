import React from 'react';
import Table, {
  TableBody,
  TableHeader,
  TableCell,
  TableRow,
  TableHead,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import './ProductsTable.css';


const ProductsTable = () => {

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
          <TableRow >
            <TableCell>1</TableCell>
            <TableCell>John Smith</TableCell>
            <TableCell>Employed</TableCell>
            <TableCell>John Smith</TableCell>
            <TableCell>Employed</TableCell>
            <TableCell>100 </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </Paper>


)};

export default ProductsTable;