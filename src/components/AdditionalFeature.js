import React from 'react';
import { connect } from "react-redux";
import { addFeature } from "../actions";



const AdditionalFeature = props => {
  const handleAdd = e => {
    e.preventDefault();
    props.addFeature(props.feature.id)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={handleAdd}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    feature: state.car.feature
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
