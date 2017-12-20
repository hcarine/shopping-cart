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
    return this.getTotal('total')
  }
  getTotalTax(){
    return this.getTotal('tax') / 100 * this.getTotal('total')
  }

  getTotal( key ){
     var totalPrices = this.state.productList.map(data => data[key])
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