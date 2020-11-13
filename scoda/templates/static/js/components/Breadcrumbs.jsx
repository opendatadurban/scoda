import React from 'react';

const Breadcrumbs = (props) => {
  return (
    <div className={["breadcrumbs " + props.className]}>
      {props.breadcrumb.items.map((item, i) =>
        <a key={i} href={item[0]} className="breadcrumbs-item">{item[1]}</a>
      )}
    </div>
  );
};

export default Breadcrumbs;