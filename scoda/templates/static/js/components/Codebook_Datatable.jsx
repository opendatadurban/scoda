import React, { Component } from 'react';
import { Table, Collapse } from 'reactstrap';

const mockData = [
    {
        varCode: 'EE1.1.0',
        indicator: 'Percentage of households with access to electricity',
        c88: 'EE',
        socr: 'WC',
        sdg: 7,
        children: [
            {
                varCode: 'EE1.1.1',
                indicator: 'Number of households having access to electricity',
            },
            {
                varCode: 'EE1.1.2',
                indicator: 'Total number of households in the municipality',
            },
        ]
    },
    {
        varCode: 'EE1.1.0',
        indicator: 'Percentage of households with access to electricity',
        c88: 'EE',
        socr: 'WC',
        sdg: 7,
        children: [
            {
                varCode: 'EE1.1.1',
                indicator: 'Number of households having access to electricity',
            },
            {
                varCode: 'EE1.1.2',
                indicator: 'Total number of households in the municipality',
            },
        ]
    },
    {
        varCode: 'EE1.1.0',
        indicator: 'Percentage of households with access to electricity',
        c88: 'EE',
        socr: 'WC',
        sdg: 7,
        children: [
            {
                varCode: 'EE1.1.1',
                indicator: 'Number of households having access to electricity',
            },
            {
                varCode: 'EE1.1.2',
                indicator: 'Total number of households in the municipality',
            },
        ]
    },
]

export default class CodebookDatatable extends Component {
    constructor(props) {
        super(props);

        this.state ={
            data: []
        };
    }

    async componentDidMount() {
        // First clone mockData
        const mockDataClone = mockData.slice();

        // Append open property to each parent item
        for(let item of mockDataClone) {
            item.open = false;
        }

        this.setState({
            data: mockDataClone
        });
    }

    renderChildren(parent) {
        if (parent.children.length > 0) {
            return parent.children.map(item => {
                return(
                   <Collapse isOpen={parent.open}>
                       <tr>
                           <td>{ item.varCode }</td>
                           <td colSpan="5">{ item.indicator }</td>
                       </tr>
                   </Collapse>
                );
            })
        }
    }

    toggleAccordion(index) {
        // copy data from state
        const copyData = this.state.data;

        // set the open property to true/false one the selected item
        copyData[index].open = !copyData[index].open;

        this.setState({
            data: copyData
        });
    }
    
    render() {
        if (this.state.data.length < 1) return "Loading data"

        return(
            <Table hover>
                <thead>
                <tr>
                    <th>VAR CODE</th>
                    <th>INDICATOR SHORT NAME</th>
                    <th>THEMES:</th>
                    <th>C88</th>
                    <th>SOCR</th>
                    <th>SDG</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    mockData.map((parentItem, index) => {
                        return (
                            <div>
                                <tr>
                                    <td>{ parentItem.varCode }</td>
                                    <td colSpan="2">{ parentItem.indicator }</td>
                                    <td><i className="circle">{ parentItem.c88 }</i></td>
                                    <td><i className="circle">{ parentItem.socr }</i></td>
                                    <td><i className="circle">{ parentItem.sdg }</i></td>
                                    <td className="col-1 tooglebtn">
                                        <i
                                            className={parentItem.open ? 'fa fa-caret-left fa-2x hero-block-arrow-expand' : 'fa fa-caret-down fa-2x hero-block-arrow-expand'}
                                            style={{color: '#2F3442'}}
                                            aria-hidden="true"
                                            onClick={() => this.toggleAccordion(index)}></i>
                                    </td>
                                </tr>
                                { this.renderChildren(parentItem) }
                            </div>
                        );
                    })
                }
                </tbody>
            </Table>
        );
    }
}
