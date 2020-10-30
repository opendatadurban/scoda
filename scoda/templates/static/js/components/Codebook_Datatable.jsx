import React, { Component, Fragment } from 'react';
import { Modal, ModalBody, ModalHeader, Table } from 'reactstrap';
import Codebook_Filter_Search from './Codebook_Filter_Search';
import axios from 'axios';

export default class CodebookDatatable extends Component {

    constructor(props) {
        super(props);

        this.state ={
            data: [],
            selected: null,
        };
    }

    async componentDidMount() {
        axios.get('/api/codebook/1').then(res => {
            this.setState({data: res.data});
        });

        const mockDataClone = mockData.slice();

        // Append open property to each parent item
        for(let item of mockDataClone) {
            item.open = false;
        }
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
                                <td></td>
                                <td><div>{item.varCode}</div></td>
                                <td><div style={{ whiteSpace: 'pre-wrap'}}>{item.indicator}</div></td>
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

    getC88Code(code) {
      return code.split(".")[0]
    }

    getSORCCode(code) {
      const strArr = code.split(" ")

      let sorc = ""

      strArr.map((str) => {
        sorc += str.charAt(0)
      })

      return sorc
    }

    render() {
        return(
            <div className="data-table">
                <Table hover responsive>
                    <thead>
                        <tr>
                            <th width="7%"></th>
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
                            this.state.data.map((parentItem, index) => {
                                return (
                                    <>
                                        <tr className="parent-item">
                                            <td></td>
                                            <td>
                                                <div>{parentItem.varCode}</div>
                                            </td>
                                            <td>
                                                <div style={{ whiteSpace: 'pre-wrap'}}>{parentItem.indicator}</div>
                                            </td>
                                            <td>
                                                <div></div>
                                            </td>
                                            <td>
                                                <div className="circle-c88">
                                                    <div className="circle-icon-text">{this.getC88Code(parentItem.varCode)}</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="circle-socr">
                                                    <div className="circle-icon-text">{this.getSORCCode(parentItem.socr)}</div>
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
