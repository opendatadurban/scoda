import React, { Component } from 'react';


export default class DataStoriesContentCardCarouselHighlightBlock extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
                    <div className="col ds-content-card-highlight-block ds-content-card-highlight-block-header pb-3">
                        <div className="row">
                            <div className="col-10 mt-4 ml-5 mx-5">
                                <p className={"ds-content-card-highlight-block-header-title "+this.props.className}>{this.props.infoBlockTitle}</p>
                                <p className="ds-content-card-highlight-block-header-paragraph ">{this.props.infoBlockText}</p>
                            </div>
                        </div>
                    </div> 
        )
    }
}