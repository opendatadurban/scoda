import React, { Component, Fragment } from 'react';
import { Table } from 'reactstrap';

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
    },{
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
    },{
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
    },{
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
];

const tableHeader = {
    color: '#4A4A4A',
    whiteSpace: 'nowrap',
    fontFamily: 'Montserrat',
    fontSize: '10px',
    letterSpacing: '0',
    lineHeight: '13px',
};
const codebookTableBody = {
    color: '#4A4A4A',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    fontWeight: '600',
    whiteSpace: 'nowrap'
};
const codebookTableChildItem = {
    color: '#4A4A4A',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    letterSpacing: '0',
    lineHeight:' 24px',
    whiteSpace: 'nowrap'
};
const circleIconText = {
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '10px',
    letterSpacing: '0',
    lineHeight: '13px',
    textAlign: 'center',
    paddingTop: '15%',
};
const selectedElementRow = {
    height: '24px',
    width: '855px',
    borderRadius: '3px 0 0 3px',
    backgroundColor: '#1E272E',
};
const selectedItemText = {
    height: '24px',
    width: '101px',
    color: '#FFFFFF',
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '0',
    lineHeight: '24px'
};

export default class CodebookDatatable extends Component {

    constructor(props) {
        super(props);

        this.state ={
            data: [],
            selected: null,
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

    setSelected(childItem) {
        this.setState({
            selected: childItem
        });
    }

    renderChildren(parent) {
        if (parent.children.length > 0) {
            return parent.children.map(item => {
                if (parent.open) {
                    return(
                        <Fragment>
                            <tr onClick={() => {this.setSelected(item)}}>
                                <td><div>{item.varCode}</div></td>
                                <td><div>{item.indicator}</div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                                <td><div></div></td>
                            </tr>
                        </Fragment>
                    );
                }
            })
        }
    }

    toggleAccordion(index) {
        // copy data from state
        const copyData = this.state.data.slice();

        // set the open property to true/false one the selected item
        copyData[index].open = !copyData[index].open;

        this.setState({
            data: copyData
        });
    }
    
    render() {
        return(
            <Table>
                <thead>
                <tr style={tableHeader}>
                    <th><div>VAR CODE</div></th>
                    <th><div>INDICATOR SHORT NAME</div></th>
                    <th><div>THEMES:</div></th>
                    <th><div>C88</div></th>
                    <th><div>SOCR</div></th>
                    <th><div>SDG</div></th>
                    <th><div></div></th>
                </tr>
                </thead>
                <tbody>
                {
                    mockData.map((parentItem, index) => {
                        return (
                            <Fragment>
                                <tr style={codebookTableBody}>
                                    <td><div>{parentItem.varCode}</div></td>
                                    <td><div>{parentItem.indicator}</div></td>
                                    <td><div></div></td>
                                    <td><div style={{
                                        height: '20px',
                                        width: '20px',
                                        backgroundColor: '#F73E55',
                                        borderRadius: '50%'
                                    }}><div style={circleIconText}>{parentItem.c88}</div></div></td>
                                    <td><div style={{
                                        height: '20px',
                                        width: '20px',
                                        backgroundColor: '#EAB04B',
                                        borderRadius: '50%'
                                    }}><div style={circleIconText}>{parentItem.socr}</div></div></td>
                                    <td><div style={{
                                        height: '20px',
                                        width: '20px',
                                        backgroundColor: '#4F9DA6',
                                        borderRadius: '50%'
                                    }}><div style={circleIconText}>{parentItem.sdg}</div></div></td>
                                    <td className="col-1 tooglebtn">
                                        <div><i
                                            className={parentItem.open ? "fa fa-caret-left fa-2x hero-block-arrow-expand" : "fa fa-caret-down fa-2x hero-block-arrow-expand"}
                                            style={{color: '#2F3442'}}
                                            aria-hidden="true"
                                            onClick={() => this.toggleAccordion(index)}>
                                        </i></div>
                                    </td>
                                </tr>
                                { this.renderChildren(parentItem) }
                            </Fragment>
                        );
                    })
                }
                </tbody>
            </Table>
        );
    }
}
