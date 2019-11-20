import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  const totalPrice = props.car.price + props.additionalPrice;
  console.log("total price: ", totalPrice)

  return (
    <div className="content">
      <h4>Total Amount: ${totalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps)(Total);
