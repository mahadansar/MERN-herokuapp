import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Buy 5 Tapes"
        description="say the magic word"
        amount={50}
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Tapes</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
