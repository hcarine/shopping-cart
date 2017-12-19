import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './SimpleMediaCard.css';


class SimpleMediaCard extends Component  {
  render(){
    return (
      <div className="aling_right">
        <Card className="cart_total">
          <CardContent>
            <Typography type="headline" component="h2">
              Net Total <span>1100</span>
            </Typography>
            <Typography component="p">
              tax <span>5</span>
            </Typography>
             <Typography component="p">
              Grand Total <span>100</span>
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}


export default SimpleMediaCard