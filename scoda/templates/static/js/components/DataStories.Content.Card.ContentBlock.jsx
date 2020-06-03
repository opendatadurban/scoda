import React, { Component } from 'react';


export default class DataStoriesContentCardContentBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
                    <div className="col ds-content-card-content-block">
                        <div className="row">
                            <div className="col-0 mt-3 ds-content-card-content-block-heading">{this.props.contentHeading}</div>
                        </div>
                        <div className="row">
                            <div className="col-0 w-100 mt-2" dangerouslySetInnerHTML={{__html:this.props.content}}></div>
                        </div>
                    </div> 
        )
    }
}