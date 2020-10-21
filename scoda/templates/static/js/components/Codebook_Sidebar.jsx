import React, { Component } from 'react';

export default class CodebookSidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    renderFirstColumn() {
        return (
            <div>
                <div >
                    INDICATOR SHORT NAME
                </div>
                <div>
                    Number of households having access to electricity
                </div>
                <div>
                    <div>
                        <div >VAR CODE</div>
                        <div >EE1.1.1</div>
                    </div>
                    <div >
                        <div >IND. GROUP</div>
                        <div >EE1.1.1</div>
                    </div>
                    <div >
                        <div >THEMES:</div>
                    </div>
                    <div >
                        <div >C88</div>
                        <div >EE</div>
                    </div>
                    <div >
                        <div >SOCR</div>
                        <div >WG</div>
                    </div>
                    <div >
                        <div >SDG</div>
                        <div >7</div>
                    </div>
                </div>
            </div>
        );
    }

    renderSecondColumn() {
        return(
            <div>
                <div >DEFINITION</div>
                <div >This is the total number of households that have access to electricity</div>
                <div >
                    <div >
                        <div >REPORTING RESPONSIBILITY</div>
                        <div >National</div>
                    </div>
                    <div >
                        <div >GATHERING METHOD</div>
                        <div >Webscrape</div>
                    </div>
                </div>
                <div >
                    <div >SOURCE</div>
                    <div >Stats SA Superweb General Household Survey</div>
                </div>
            </div>
        );
    }

    renderThirdColumn() {
        return(
            <div >
                <div>
                    <div>UNIT OF MEASUREMENT</div>
                    <div >Number of households</div>
                </div>
                <div >
                    <div >NOTES ON CALCULATION</div>
                    <div >NA</div>
                </div>
                <div >
                    <div >FREQUENCY OF COLLECTION</div>
                    <div >Annual Midyear following year</div>
                </div>
                <div >
                    <div >PERIOD</div>
                    <div >January December</div>
                </div>
            </div>
        );
    }

    renderFourthColumn() {
        return(
            <div>
                <div>
                    <div>
                        <div>VARIABLE TYPE</div>
                        <div>AUTOMATABILITY</div>
                    </div>
                    <div>
                        <div>Float</div>
                        <div>Yes</div>
                    </div>
                </div>
               <div>
                   <div>
                       <div>GRANULARITY</div>
                       <div>EXPANDABILITY</div>
                   </div>
                   <div>
                       <div>No</div>
                       <div>No</div>
                   </div>
               </div>
            </div>
        );
    }

    render() {
        return(
            <div>
                { this.renderFirstColumn() }
                { this.renderSecondColumn() }
                { this.renderThirdColumn() }
                { this.renderFourthColumn() }
            </div>
        );
    }
}
