import React, { Component } from 'react';


export default class DataStoriesContentCardHighlightBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
                    <div className="col ds-content-card-highlight-block">
                        <div className="row">
                            <div className="col-10 mt-4 ml-5 mx-5">
                            {this.props.infoBlockText}
                            </div>
                        </div>
                    </div> 
        )
    }
}