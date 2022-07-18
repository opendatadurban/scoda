import React from 'react';
import { Modal } from 'reactstrap';

const SoCR_Modal = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} toggle={() => { setIsOpen(!isOpen) }} className="modal-socr ">
            <div className="container">
                <div className="row modal--header">
                    <div className="col-8 p-0">
                        <h3 className="modal--heading">State of Cities Reports</h3>
                    </div>
                    <div className="col-4 close" onClick={(e)=>{setIsOpen(false)}}>
                        {/* <span>&#10006;</span> */}
                    </div>
                </div>
                <div className="row modal--body">
                    <div className="col-12 pr-0">
                        <div className="row">
                            <div className="col-md-4 report--image" style={{ backgroundImage: "url(/static/dist/img/image_report-2021_new.png)" }}></div>
                            <div className="col report--content">
                                <h5 className="report--content--title">
                                    SoCR 2021
                                </h5>
                                <p className="report--content--p">
                                The fifth SoCR uses a governance lens to diagnose progress made towards achieving productive, inclusive, sustainable and spatially transformed cities, with a focus on cooperative governance and the all-of-society approach. 
                                </p>
                                <a href="https://www.sacities.net/wp-content/uploads/2022/04/SoCR-V-2021_WEB-144dpi.pdf" className="report--content--btn-download" target='_blank' download>Download Report</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 report--image" style={{ backgroundImage: "url(/static/dist/img/image_report-2016.png)" }}></div>
                            <div className="col report--content">
                                <h5 className="report--content--title">
                                    SoCR 2016
                                </h5>
                                <p className="report--content--p">
                                    The theme of the fourth SoCR was “South African cities as effective drivers of local and national development”. The report reviewed city performances over an administrative term in relation to focal issues, sought to understand the reasons and variations of such performance, and concluded by framing some priorities for the agenda of the
                                    incumbent local government administrations.
                                </p>
                                <a href="https://www.sacities.net/wp-content/uploads/2020/09/SoCR16-Main-Report-online.pdf" className="report--content--btn-download" target='_blank' download>Download Report</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 report--image" style={{ backgroundImage: "url(/static/dist/img/image_report-2011.png)" }}></div>
                            <div className="col report--content">
                                <h5 className="report--content--title">
                                    SoCR 2011
                                </h5>
                                <p className="report--content--p">
                                    Under the theme of “Towards resilient cities”, the third SoCR continued to track and advocate for “the urban”. Its central question was whether or not developmental metropolitan government was having the desired effect of improving socioeconomic and environmental conditions in urban South Africa.
                                </p>
                                <a href="https://www.sacities.net/wp-content/uploads/2020/03/SACN-2011-Report.pdf" className="report--content--btn-download" target='_blank' download>Download Report</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 report--image" style={{ backgroundImage: "url(/static/dist/img/image_report-2006.png)" }}></div>
                            <div className="col report--content">
                                <h5 className="report--content--title">
                                    SoCR 2006
                                </h5>
                                <p className="report--content--p">
                                    This second SoCR was an update to the first SoCR but had a wider scope and interpretation of urban trends and dynamics. It considered how city development strategies had facilitated economic growth and the extent to which cities had succeeded in providing
                                    access to services, amenities and opportunities for all residents. Importantly, it concluded that the apartheid legacy of cities remained largely untransformed.
                                </p>
                                <a href="https://www.sacities.net/wp-content/uploads/2020/03/state_of_cities_report2006.pdf" className="report--content--btn-download" target='_blank' download>Download Report</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 report--image" style={{ backgroundImage: "url(/static/dist/img/image_report-2004.png)" }}></div>
                            <div className="col report--content">
                                <h5 className="report--content--title">
                                    SoCR 2004
                                </h5>
                                <p className="report--content--p">
                                    This second SoCR was an update to the first SoCR but had a wider scope and interpretation of urban trends and dynamics. It considered how city development strategies had facilitated economic growth and the extent to which cities had succeeded in providing
                                    access to services, amenities and opportunities for all residents. Importantly, it concluded that the apartheid legacy of cities remained largely untransformed.
                                </p>
                                <a href="https://www.sacities.net/wp-content/uploads/2020/03/SOCR_2004.pdf" className="report--content--btn-download" target='_blank' download>Download Report</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
};
export default SoCR_Modal;