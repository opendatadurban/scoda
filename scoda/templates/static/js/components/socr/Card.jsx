import React from "react";
import GetCardInfo from "./CardInfo";

const Card =() => {
    const{info} = GetCardInfo()

    return(
        <div className="container-fluid socr-cards">
        <div className="bootstrap-4">
          <div className="container">
            <div className="row">
              {
    
              info.map((item,i) => 
              <div key={i} className="col-md-4">
                <div className={"card card_data-story-preview card_data-story-preview"+[item.class]+" module"}
                  id="card_data-story-preview_durban-economy">
                  <a href={item.href} className="card--trigger">Card click layer</a>
                  <div className="card--body">
                    <div className="card--body--content">
                      <h3 className="card_data-story-preview--title">{item.header}<br/>
                          <span className="card_data-story-preview--title--meta">{item.subheader}</span>
                      </h3>
                      <hr/>
                      <div className={"card_data-story-preview--metadata"}>
                        {/* <span className="label">Published</span> */}
                        <h4>{item.type}</h4>
                      </div>
                    </div>
                    <div className={"card--gaussian-blur"+[item.class]}></div>
                    <div className={"card--gaussian-blur"+[item.class]}></div>
                  </div>
                </div>
              </div>
              )
            }
         </div>
      </div>
    </div>
</div>
    )
}
export default Card;