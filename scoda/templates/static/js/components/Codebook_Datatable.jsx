import React, { Component, Fragment } from 'react';
import { Modal, ModalBody, ModalHeader, Table } from 'reactstrap';
import Codebook_Filter_Search from './Codebook_Filter_Search';
import axios from 'axios';

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

export default class CodebookDatatable extends Component {

    constructor(props) {
        super(props);

        this.state ={
            data: [],
            selected: null,
        };
    }

    async componentDidMount() {

        // get data
        axios.get('/api/codebook/1').then(res => console.log(res));
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
                            <tr className="child-item" onClick={() => {this.setSelected(item)}}>
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
            <div className="data-table">
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th>
                                <div>VAR CODE</div>
                            </th>
                            <th>
                                <div>INDICATOR SHORT NAME</div>
                            </th>
                            <th>
                                <div>THEMES:</div>
                            </th>
                            <th>
                                <div>C88</div>
                            </th>
                            <th>
                                <div>SOCR</div>
                            </th>
                            <th>
                                <div>SDG</div>
                            </th>
                            <th>
                                <div></div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mockData.map((parentItem, index) => {
                                return (
                                    <>
                                        <tr className="parent-item">
                                            <td>
                                                <div>{parentItem.varCode}</div>
                                            </td>
                                            <td>
                                                <div>{parentItem.indicator}</div>
                                            </td>
                                            <td>
                                                <div></div>
                                            </td>
                                            <td>
                                                <div className="circle-c88">
                                                    <div className="circle-icon-text">{parentItem.c88}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="circle-socr">
                                                    <div className="circle-icon-text">{parentItem.socr}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="circle-sdg">
                                                    <div className="circle-icon-text">{parentItem.sdg}</div>
                                                </div>
                                            </td>
                                            <td className="tooglebtn">
                                                <div><i
                                                    className={parentItem.open ? "fa fa-caret-left fa-2x hero-block-arrow-expand" : "fa fa-caret-down fa-2x hero-block-arrow-expand"}
                                                    style={{color: '#2F3442'}}
                                                    aria-hidden="true"
                                                    onClick={() => this.toggleAccordion(index)}>
                                                </i></div>
                                            </td>
                                        </tr>
                                        {this.renderChildren(parentItem)}
                                    </>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}
