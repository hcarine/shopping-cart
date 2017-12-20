import React, { Component } from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import './SimpleMediaCard.css';


class SimpleMediaCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productList: this.props.data
    }
  }

  getTotalPrice(){
    return this.getTotal( 'total', this.state.productList)
  }

  getTotalTax(){

    return this.getTotal('tax', this.state.productList) / 100 * this.getTotal('total', this.state.productList)
  }

  getTotal( key, data){
     var totalPrices = data.map(product => product[key])
    return totalPrices.reduce( (accumulator, currentValue) => accumulator + currentValue )
  }
  
  render(){
    return (
      <div className="aling_right">
        <Card className="cart_total">
          <CardContent>
            <Typography type="headline" component="h2">
              Net Total <span>{this.getTotalPrice()}</span>
            </Typography>
            <Typography component="p">
              tax <span>{this.getTotalTax()}</span>
            </Typography>
             <Typography component="p">
              Grand Total <span>{this.getTotalPrice()}</span>
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}


export default SimpleMediaCard