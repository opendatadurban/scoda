import React from 'react';
const Footer_mobile_light = (props) => {
  return (
    <footer className={["container footer_mobile_light " + props.className]}>
      <div className="container footer-content p-0">
        <div className="row d-flex align-items-center text-left">
          <div className="col-2">
            <a href="/#/home"><img className="" src={props.logoPath} alt="DDCI logo" /></a>
          </div>
          <div className="col-10">
            {/*<span>A collaboration between: <a>DCCI</a> & <a href="edge.durban">THE DURBAN EDGE</a> & <a href="opencitieslab.org">OCL</a></span>*/}
          </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer_mobile_light;