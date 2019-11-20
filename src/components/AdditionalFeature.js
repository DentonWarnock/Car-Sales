import React from 'react';
import { connect } from "react-redux";
import { addFeature, updatePrice } from "../actions";


const AdditionalFeature = props => {

  const handleAdd = e => {
    e.preventDefault();
    props.addFeature(e.target.value);
    props.updatePrice();
    console.log(e.target.value);
    console.log(props.feature.price);
  }

  const conditionalButton = () => {
    return !props.featuresList.includes(props.feature) ? 
      <button className="button" onClick={handleAdd} value={props.feature.id}>Add</button> 
      : 
      <div className={"added"}><b>Added!</b></div>;
  }


  return (
    <>
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        {conditionalButton()}      
        {/* <button className="button" onClick={handleAdd} value={props.feature.id}>Add</button> */}
        {props.feature.name} (+{props.feature.price})
      </li>     
    </>
  );
};

const mapStateToProps = state => {
  return {
    // additionalPrice: state.additionalPrice,
    car: state.car,
    featuresList: state.car.features
  }
}

export default connect(mapStateToProps, { addFeature, updatePrice })(AdditionalFeature);
