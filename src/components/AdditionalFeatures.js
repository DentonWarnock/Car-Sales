import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";

const AdditionalFeatures = props => {

  const allAdded = () => {
    if (props.featuresList.length >= 4) {
      return <div className="fully-loaded"><b>All Features Added! Vehicle is Fully Loaded!</b></div>
    }
  }

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
      {allAdded()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    featuresList: state.car.features,
    additionalFeatures: state.additionalFeatures    
  }
}

export default connect(mapStateToProps)(AdditionalFeatures);
