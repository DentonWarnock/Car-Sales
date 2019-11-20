import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions";


const AdditionalFeature = props => {

  const handleAdd = e => {
    e.preventDefault();
    props.addFeature(e.target.value)
    console.log(e.target.value);
    console.log(props);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAdd} value={props.feature.id}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    // feature: state.car.feature
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
