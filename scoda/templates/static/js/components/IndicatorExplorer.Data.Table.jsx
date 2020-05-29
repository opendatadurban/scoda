import React, { Component } from 'react';


export default class IndicatorExplorerDataTable extends Component {
    constructor(props) {
        super(props);
    }

    renderDataTable(dataSet) {
        let keyArray = Object.keys(dataSet);

        return keyArray.map((key,index) =>(
            <td key={dataSet[key]}>{dataSet[key]}</td>
        ));
    }

    render() {

        let resultSet = this.props.results;

        let keyArray = Object.keys(resultSet[0]);

        const tableHeader = keyArray.map((result,index) =>(
                <th key={result} scope="col">{result}</th>
        ));

        const tableData = resultSet.map((result,index) =>(
            <tr>                
                {this.renderDataTable(result)}
            </tr>
        ));

        return (
            <table className="table w-100">
            <thead>
                <tr>
                 {tableHeader}
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
            </table>
        )
    }
}
