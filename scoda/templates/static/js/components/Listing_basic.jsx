import React from 'react';
import Button from './Button';

const Listing_basic = (props) => {
  return (
    <div className={["listing_basic "] + props.className}>
      <hr />
      {props.children}
      </div>
  );
};

export default Listing_basic;