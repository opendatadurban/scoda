import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

export default class CodebookDatatable extends Component {

    constructor(props) {
        super(props);

        this.state ={
            data: [],
            selected: null,
            currentPage: 1,
            isLoading: false
        };

        this.selectChild = this.selectChild.bind(this);
    }

    async componentDidMount() {
        axios.get('/api/codebook/1').then(res => {
            const copyData = res.data.slice(1, res.data.length);

            // Append open property to each parent item
            for(let item of copyData) {
                item.open = false;
            }

            this.setState({ data: copyData });
        });

    }

    selectChild(item) {
        this.props.setSelectedChild(item);
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
        if(!code) {
            return;
        }
      return code.split(".")[0]
    }

    getSORCCode(code) {
      if(!code) {
          return;
      }
      const strArr = code.split(" ")

      let sorc = ""

      strArr.map((str) => {
        sorc += str.charAt(0)
      })

      return sorc
    }

    getSDG(code) {
        if(!code) {
            return;
        }

        return code.match(/(?:)([0-9]+)/)[0];
    }

    fetchData() {
        let nextPage = this.state.currentPage + 1;

        axios.get(`/api/codebook/${nextPage}`).then(res => {
            const copyData = res.data.slice(1, res.data.length);
            // Append open property to each parent item
            for(let item of copyData) {
                item.open = false;
            }

            const combinedData = [...this.state.data, ...copyData];

            this.setState({
                data: combinedData,
                currentPage: nextPage,
                isLoading: false,
            });
        });
    }

    trackScrolling(event) {
        const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
        if (bottom) {
            this.setState({
                isLoading: true
            });
            this.fetchData();
        }
    }

    renderChildren(parent) {
        if (parent.children.length > 0) {
            return parent.children.map(item => {
                if (parent.open) {
                    return(
                        <Fragment key={item.id}>
                            <tr className="child-item" onClick={() => {this.selectChild(item)}}>
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

    renderLoading() {
        if(this.state.isLoading) {
            return(
                <tfoot>
                    <tr>
                        <th></th>
                        <th>
                            <div></div>
                        </th>
                        <th colSpan="6">
                            <div>Loading data...</div>
                        </th>
                    </tr>
                </tfoot>
            )
        }
    }

    render() {
        return(
            <div className="data-table" onScroll={(event) => this.trackScrolling(event)}>
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
                                <Fragment key={index}>
                                    <tr className="parent-item">
                                        <td></td>
                                        <td>
                                            <div>{parentItem.varCode}</div>
                                        </td>
                                        <td>
                                            <div style={{whiteSpace: 'pre-wrap'}}>{parentItem.indicator}</div>
                                        </td>
                                        <td>
                                            <div></div>
                                        </td>
                                        <td>
                                            <div className="circle-c88">
                                                <div
                                                    className="circle-icon-text">{this.getC88Code(parentItem.varCode)}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="circle-socr">
                                                <div
                                                    className="circle-icon-text">{this.getSORCCode(parentItem.socr)}</div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="circle-sdg">
                                                <div className="circle-icon-text">{this.getSDG(parentItem.sdg)}</div>
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
                                </Fragment>
                            );
                        })
                    }
                    </tbody>
                    {
                        this.renderLoading()
                    }
                </Table>
            </div>
        );
    }
}
