import React from "react";

const Navigation = ()=>{
    return(
        <nav className="adh--navigation">
            <div className="container ">
                <div className="row">
                    <div className="col-3">
                        <div className="adh--navigation-logo"></div>
                    </div>
                    <div className="col"></div>
                    <div className="col-3 d-flex align-items-center justify-content-end">
                        <a href="https://www.africadatahub.org/">Go to ADH home on the web</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navigation;