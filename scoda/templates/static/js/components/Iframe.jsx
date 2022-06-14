import React from "react";

const Iframe = (props) => {
  return (
    <div>
        <iframe src={props.src} height={props.height} width="100%"></iframe>
    </div>
  );
};
export default Iframe;