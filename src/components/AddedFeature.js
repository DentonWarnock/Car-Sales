import React from 'react';
import { connect } from 'react-redux';
import { removeFeature, updatePrice } from "../actions"

const AddedFeature = props => {

  const handleRemove = e => {
    e.preventDefault();
    props.removeFeature(props.feature.id);
    props.updatePrice();
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleRemove} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature, updatePrice })(AddedFeature);
