import React from 'react';

const Title_block = (props) => {
  return (
    <h2 className={["title-block "] + props.className}>{props.children}</h2>
  );
};

export default Title_block;