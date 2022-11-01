import React, { Component } from 'react';
export default class Data_stories extends Component {
    render() {
        return (
            <div className="data-stories data-stories_masonry">
                <div className="container">
                    <div className="row bottom-row">
                        <div className="col-md-4">
                            <a data-toggle="modal" data-target="#exampleModalLong4" className="data-stories--story urban-safety trigger">
                                <span className="data-stories--label">
                                    <strong>Urban Safety</strong>
                                    <p>South African Cities in Context</p>
                                </span>
                            </a>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-6">
                                    <a href="https://scoda.opendata.durban/group/epwp" className="data-stories--story epwp-data-group trigger">
                                        <span className="data-stories--label">
                                            <strong>EPWP Data Group</strong>
                                            <p>View Our Collection of Datasets</p>
                                        </span>
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a className="data-stories--title-block">
                                        <h2>Insights</h2>
                                        <p>Click on any of these cards <br />to learn more about what we do.</p>
                                    </a>
                                </div>
                                <br />
                                <div className="col-12">
                                    <a data-toggle="modal" data-target="#exampleModalLong5" className="data-stories--story epwp-data-story trigger">
                                        <span className="data-stories--label">
                                            <strong>State of the EPWP</strong>
                                            <p>South African Cities 2017/18</p>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}