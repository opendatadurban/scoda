import React, { useState } from "react";
import $ from "jquery";

const WizardAddArticle = () => {
  return (
    <div>
      <div
        id="sampleModal"
        className="modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                {" "}
                <span aria-hidden="true" className="visible-xs">
                  ×
                </span>
              </button>
              <h4 className="modal-title" id="myTitle">
              Add an Article

</h4>
            </div>
            <div className="modal-body">
              <div id="step1">
                <div className=" text-center modal-menu-content">
                  <div>
                    <p className="step">Step 1</p>
                  </div>

                  <div className="step-image">
                    <img
                      src="../../../../static/img/article-add_1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="step-instruction">
                      Upload the article source file
                    </p>
                  </div>
                  <div className="modal-center-main">
                    <div>
                      <div id="file-picker">
                        <label
                          for="article-source"
                          className="custom-file-upload"
                        >
                          Choose File
                          <input
                            type="file"
                            name="article-source"
                            id="article-source"
                          />
                        </label>
                        <br />

                        <span id="article-file-name">No file selected </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className=" js-btn-step"
                      data-orientation="next"
                      disabled="true"
                      id="article-source-button"
                    ></button>
                  </div>
                </div>
              </div>
              <div id="step2" className="hideMe">
                {" "}
                <span>Now select something for Step 2</span>
                <div className="text-center modal-menu-content">
                  <div>
                    <p className="step">Step 2</p>
                  </div>

                  <div className="step-image">
                    <img
                      src="../../../../static/img/article-add_2.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="step-instruction">
                      Confirm the name of the article
                    </p>
                  </div>
                  <div className="modal-center-main">
                    <div id="name-of-article">
                      <textarea
                        className="article-teaxtarea"
                        id="article-name-content"
                      ></textarea>
                    </div>

                    <button
                      type="button"
                      className=" js-btn-step"
                      disabled="true"
                      data-orientation="next"
                      id="article-name-button"
                    ></button>
                  </div>
                </div>
              </div>
              <div id="step3" className="hideMe">
                <div className="text-center modal-menu-content">
                  <div>
                    <p className="step">Step 3</p>
                  </div>

                  <div className="step-image">
                    <img
                      src="../../../../static/img/article-add_3.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="step-instruction">
                      Assign article to a Monitor
                    </p>
                  </div>
                  <div className="modal-center-main">
                    <div id="article-monitor-select">
                      <select name="" id="">
                        <option value="">Not Assigned</option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      className=" js-btn-step"
                      data-orientation="next"
                      disabled="true"
                      id="article-monitor-button"
                    ></button>
                  </div>
                </div>
              </div>
              <div id="step4" className="hideMe">
              <div className="text-center modal-menu-content">
              <div>
                <p className="step">Step 4</p>
              </div>

              <div className="step-image">
                <img src="../../../../static/img/article-add_4.png" alt="" />
              </div>
              <div>
                <p className="step-instruction">Leave notes for the Monitor</p>
              </div>
              <div className="modal-center-main">
                <div id="monitor-notes">
                  <textarea className="article-teaxtarea"></textarea>
                </div>

                <button
                  type="button"
                  className=" js-btn-step"
                  data-orientation="next"
                  disabled="true"
                  id="monitor-notes-button"
                ></button>
              </div>
            </div>
              </div>
            </div>
            <div className="modal-footer" />
          </div>
        </div>
      </div>
      {/* <button id="showModal" data-toggle="modal" data-target="#sampleModal">
        Open The Modal
      </button> */}
    </div>
  );
};

export default WizardAddArticle;
