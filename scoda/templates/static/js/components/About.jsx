import React, { Component } from "react";
export default class CTA_block extends Component {
  render() {
    return (
      <div className="about-us module-wrapper justify-content-center justify-items-center">
        <div className="container">
          <div className="row heading  pt-5 mb-5">
            <div className="col-12">
              <h2>About Us</h2>
            </div>
          </div>
          <div className="row what-is-scoda mt-5 mb-5">
            <div className="col-12">
              <h3>What is SCODA?</h3>
              <p>
                The <i>South African Cities Open Data Almanac</i> is a
                city-centric data portal that improves ease of access to current
                and comparable information about South African cities -
                informing evidence-based decision making and reporting.
              </p>
            </div>
          </div>
          <div className="row what-do-we-do  mt-5 mb-5">
            <div className="col-12">
              <h3>What Do We Do?</h3>
              <p>
                With the fast-changing and increasingly complex dynamics of
                contemporary South Africa where the majority of people now live
                in cities, monitoring how cities are planned and managed is
                important. Indicators are critical to effective planning and
                management in urban contexts, organising information sets into
                simpler, and easier to understand and compare ‘measures’ of what
                is happening. Good urban indicator sets allow for a longitudinal
                perspective (i.e. change over time) and comparisons between
                cities locally and internationally, enabling cities to see
                whether or not they are adequately achieving their objectives.{" "}
              </p>
              <img
                src="/static/dist/img/SCODA Assets V3_2 Desktop/3 About Us/What We Do/image_about_what-do-we-do.svg"
                alt=""
              />
            </div>
          </div>
          <div className="row how-was-scoda-developed mt-5 mb-5">
            <div className="col-12">
              <h3>How Was SCODA Developed? </h3>
              <img
                src="/static/dist/img/SCODA Assets V3_1/3 About Us/How Was SCODA Developed/image_about_how-was-scoda-developed.svg"
                alt=""
              />
            </div>
          </div>
          <div className="row partnership mt-5 mb-5">
            <div className="col-12">
              <h3>Partnerships</h3>
              <p>
                SCODA is a long standing partnership between the South African
                Cities Network and Open Cities Lab. Over the years, major South
                African cities have turned to SACN as a trusted source of data
                collection, analysis and report building which manifests as the
                yearly State of Cities Report. SACN partnered with OCL to
                translate these reports into bite-sized and actionable pieces of
                information culminating in the form of SCODA, our joint flagship
                that we are proud to work together on in the interest of
                capacitating governing bodies to understand themselves and their
                constituents and vice versa.
              </p>
            </div>
          </div>
          <a href="https://www.sacities.net" target="_blank">
            <div className="row box container">
              <div className="col-12">
                <p>
                  Further information about the development of SCODA is
                  available at <strong>www.sacities.net</strong>
                </p>
              </div>
            </div>
          </a>
          <div className="row important-links mt-5 mb-5">
            <div className="col-12">
              <h3>Important Links</h3>
              <p>
                SCODA is a collaborative project by nature which utilises many
                inputs from multiple trusted sources to afford cities the
                opportunity to better understand themselves. Here are some of
                our core trusted sources:
              </p>
            </div>
            <div className="important-links-logos-container">
              <ul className="important-links-logos-list container">
                <li>
                  <div className="item">
                    <a href="https://www.sacities.net/">
                    <img
                      src="/static/dist/img/SCODA Assets V3_1/3 About Us/Important Links/logo_important-links_sacn.png"
                      alt=""
                    />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="http://www.socr.co.za/">
                    <img
                      src="/static/dist/img/SCODA Assets V3_1/3 About Us/Important Links/logo_important-links_2016-state-of-cities-report.png"
                      alt=""
                    />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="http://stepsa.org/about.html">
                    <img
                      src="/static/dist/img/SCODA Assets V3_1/3 About Us/Important Links/logo_important-links_stepsa.png"
                      alt=""
                    />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="https://salga-unrest.herokuapp.com/salga/municipality">
                    <img
                      src="/static/dist/img/SCODA Assets V3_1/3 About Us/Important Links/logo_important-links_salga.png"
                      alt=""
                    />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="http://www.statssa.gov.za/">
                    <img
                      src="/static/dist/img/SCODA Assets V3_1/3 About Us/Important Links/logo_important-links_statssa.png"
                      alt=""
                    />
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-12 line ">
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
