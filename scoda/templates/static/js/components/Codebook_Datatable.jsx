import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

export default class CodebookDatatable extends Component {

    constructor(props) {
        super(props);

        this.state ={
            data: [],
            filters: this.props.filteredData,
            selected: null,
            currentPage: 1,
            isLoading: false
        };

        this.selectChild = this.selectChild.bind(this);
    }

    componentDidMount() {
        axios.get('/api/codebook/1').then(res => {
            const copyData = res.data.slice(1, res.data.length);

            this.setOpen(copyData);
        });

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.filteredData !== this.props.filteredData) {
            axios.post('/api/codebook/1', this.props.filteredData).then(data => {
                const copyData = data.data.slice(1, data.data.length);

               this.setOpen(copyData);
            });
        }
    }

    setOpen(data) {
        // Append open property to each parent item
        let selected = null
        for(let [index, item] of data.entries()) {
            if(!selected) {
                item.open = item.children.length > 0;
                selected = item.children[0]
            }
        }

        this.setState({
            data: data,
            selected
        });
    }

    selectChild(item) {
        this.props.setSelectedChild(item);
        this.setState({
          selected: item
        })
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

    selectChildAndToggleAccordion(item,index){
        this.selectChild(item);
        this.toggleAccordion(index);
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

    // fetchData() {
    //     let nextPage = this.state.currentPage + 1;
    //
    //     axios.get(`/api/codebook/${nextPage}`).then(res => {
    //         const copyData = res.data.slice(1, res.data.length);
    //         // Append open property to each parent item
    //         for(let item of copyData) {
    //             item.open = false;
    //         }
    //
    //         const combinedData = [...this.state.data, ...copyData];
    //
    //         this.setState({
    //             data: combinedData,
    //             currentPage: nextPage,
    //             isLoading: false,
    //         });
    //     });
    // }

    // trackScrolling(event) {
    //     const bottom = event.target.scrollHeight - event.target.scrollTop === event.target.clientHeight;
    //     if (bottom) {
    //         this.setState({
    //             isLoading: true
    //         });
    //         this.fetchData();
    //     }
    // }

    renderDesktopChildren(parent) {
        const { selected } = this.state
        if (parent.children.length > 0) {
            return parent.children.map(item => {
                if (parent.open) {
                    return(
                        <Fragment key={item.id}>
                            <tr
                              className={"child-item" + (selected && selected.id === item.id? " selected-child-item" : "")}
                              onClick={() => {this.selectChild(item)}}
                              >
                                <td></td>
                                <td><div className="pl-3" >{item.varCode}</div></td>
                                <td title={item.indicator} colSpan={2}>
                                  <div>
                                    {item.indicator}
                                  </div>
                                </td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </Fragment>
                    );
                }
            })
        }
    }

    renderMobileChildren(parent) {
        const { selected } = this.state
        if (parent.children.length > 0) {
            return parent.children.map(item => {
                if (parent.open) {
                    return(
                        <Fragment key={item.id}>
                            <tr
                              className={"child-item" + (selected && selected.id === item.id? " selected-child-item" : "")}
                              onClick={() => {this.selectChild(item)}}
                              >
                                <td width={(window.innerWidth / 100 * 10) + "%"}></td>
                                <td width={(window.innerWidth / 100 * 90) + "%"} colSpan={2}>
                                  <div>
                                    {item.indicator}
                                  </div>
                                </td>
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
                        <th></th>
                        <th className="text-center">
                            <p className="codebook-loader-text">Loading more on scroll...</p>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>
            )
        }
    }

    renderDesktopTable() {
      return (
        <Table hover>
            <thead width="100%">
                <tr width="100%">
                    <th width="7%"></th>
                    <th width="13%">
                        <div className="font-weight-400">VAR CODE</div>
                    </th>
                    <th width="55%">
                        <div className="font-weight-400">INDICATOR SHORT NAME</div>
                    </th>
                    <th width="5%">
                        <div className="font-weight-400">THEMES:</div>
                    </th>
                    <th width="5%">
                        <div className="font-weight-400">C88</div>
                    </th>
                    <th width="5%">
                        <div className="font-weight-400">SOCR</div>
                    </th>
                    <th width="5%">
                        <div className="font-weight-400">SDG</div>
                    </th>
                    <th width="5%">
                        <div></div>
                    </th>
                </tr>
            </thead>
            <tbody width="100%">
            {
                this.state.data.map((parentItem, index) => {
                    return (
                        <Fragment key={index}>
                            <tr className="parent-item" width="100%" onClick={() => this.selectChildAndToggleAccordion(parentItem,index)}>
                                <td width="7%"></td>
                                <td width="13%">
                                    <div>{parentItem.varCode}</div>
                                </td>
                                <td width="60%" colSpan={2} title={parentItem.indicator}>
                                    <div>{parentItem.indicator}</div>
                                </td>
                                <td width="5%">
                                    <div className="circle-c88">
                                        <div
                                            className="circle-icon-text" title={parentItem.varCode}>{this.getC88Code(parentItem.varCode)}</div>
                                    </div>
                                </td>
                                <td width="5%">
                                    <div className="circle-socr">
                                        <div
                                            className="circle-icon-text" title={parentItem.socr}>{this.getSORCCode(parentItem.socr)}</div>
                                    </div>
                                </td>
                                <td width="5%">
                                    <div className="circle-sdg">
                                        <div className="circle-icon-text" title={parentItem.sdg}>{this.getSDG(parentItem.sdg)}</div>
                                    </div>
                                </td>
                                <td className="tooglebtn" width="5%">
                                    <div><i
                                        className={parentItem.open ? "fa fa-caret-left fa-2x hero-block-arrow-expand" : "fa fa-caret-down fa-2x hero-block-arrow-expand"}
                                        style={{color: '#2F3442'}}
                                        aria-hidden="true"
                                        >
                                    </i></div>
                                </td>
                            </tr>
                            {this.renderDesktopChildren(parentItem)}
                        </Fragment>
                    );
                })
            }
            </tbody>
            {
                this.renderLoading()
            }
        </Table>
      )
    }

    renderMobileTable() {
      return (
        <Table hover responsive>
            <thead width="100%">
                <tr width="100%">
                    <th width={(window.innerWidth / 100 * 10) + "%"}></th>
                    <th width={(window.innerWidth / 100 * 70) + "%"}>
                        <div>INDICATOR SHORT NAME</div>
                    </th>
                    <th width={(window.innerWidth / 100 * 20) + "%"}>
                        <div></div>
                    </th>
                </tr>
            </thead>
            <tbody width="100%">
            {
                this.state.data.map((parentItem, index) => {
                    return (
                        <Fragment key={index}>
                            <tr className="parent-item" width="100%">
                                <td width={(window.innerWidth / 100 * 10) + "%"}></td>
                                <td width={(window.innerWidth / 100 * 70) + "%"}>
                                    <div width={(window.innerWidth / 100 * 70) + "%"}>{parentItem.indicator}</div>
                                    <div className="mobile-meta">
                                        <div className="mobile-text">
                                          <small><strong>{parentItem.varCode}</strong></small>
                                        </div>
                                        <div className="mobile-icons">
                                          <div className="circle-c88">
                                              <div className="circle-icon-text">{this.getC88Code(parentItem.varCode)}</div>
                                          </div>
                                          <div className="circle-socr">
                                              <div className="circle-icon-text">{this.getSORCCode(parentItem.socr)}</div>
                                          </div>
                                          <div className="circle-sdg">
                                            <div className="circle-icon-text">{this.getSDG(parentItem.sdg)}</div>
                                          </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="tooglebtn" width={(window.innerWidth / 100 * 20) + "%"}>
                                    <div><i
                                        className={parentItem.open ? "fa fa-caret-left fa-2x hero-block-arrow-expand" : "fa fa-caret-down fa-2x hero-block-arrow-expand"}
                                        style={{color: '#2F3442'}}
                                        aria-hidden="true"
                                        onClick={() => this.toggleAccordion(index)}>
                                    </i></div>
                                </td>
                            </tr>
                            {this.renderMobileChildren(parentItem)}
                        </Fragment>
                    );
                })
            }
            </tbody>
            {
                this.renderLoading()
            }
        </Table>
      )
    }

    render() {
        return(
            <div className="data-table" onScroll={(event) => this.trackScrolling(event)}>
              {!window.innerWidth <= 768
                ? this.renderDesktopTable() : this.renderMobileTable()
              }
            </div>
        );
    }
}
