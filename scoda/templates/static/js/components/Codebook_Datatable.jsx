import React, { Component } from 'react';
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
    },
]

export default class CodebookDatatable extends Component {
    constructor(props) {
        super(props);
    }

    renderTable() {
        return(
            <Table hover size="sm">
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
                        mockData.map(item => {
                            return (
                                <div>
                                    <tr>
                                        <td>{ item.varCode }</td>
                                        <td colSpan="2">{ item.indicator }</td>
                                        <td>{ item.c88 }</td>
                                        <td>{ item.socr }</td>
                                        <td>{ item.sdg }</td>
                                        <td> </td>
                                    </tr>
                                    {this.renderChildren(item.children)}
                                </div>
                            );
                        })
                    }
                </tbody>
            </Table>
        );
    }

    renderChildren(children) {
        if (children.length > 0) {
            return children.map(item => {
                return(
                    <tr>
                        <td>{ item.varCode }</td>
                        <td colSpan="5">{ item.indicator }</td>
                    </tr>
                );
            })
        }
    }
    
    render() {
        return (
            this.renderTable()
        );
    }
}
