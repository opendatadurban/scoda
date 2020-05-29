import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "./Maps";

const SourceSelector = (props) => {
  return (
    <div id="source-selector">
      <div className="source-type">
        <span>{props.inforData.headerTitle}</span>
        <button className="primary">{props.inforData.buttonOne}</button>
        <button>{props.inforData.buttonTwo}</button>
      </div>

      <div id="details-caputr">
        <div className="row-1">
          <div className="unit-text">
            <label htmlFor="report-name">{props.inforData.captureLabel}</label>
            <input type="text" name="" id="report-name" />
          </div>

          <div className="unit-text">
            <label htmlFor="alias">Is This an Alias?</label>

            <select name="" id="alias">
              <option value="">Test</option>
              <option value="">Test</option>
              <option value="">Test</option>
            </select>
          </div>

          <div className="unit-text">
            <label htmlFor="affiliation">Affiliation</label>
            <select name="" id="affiliation">
              <option value="">Test</option>
              <option value="">Test</option>
              <option value="">Test</option>
            </select>
          </div>
        </div>

        <div className="row-1">
          <div className="unit-text">
            <label htmlFor="">Utterance</label>
            <input type="text" name="" id="utterance" />
          </div>
        </div>
        <div className="row-1" id="addBtn">
          <div className="unit-text">
            <label htmlFor="gender">Gender</label>
            <select name="" id="gender">
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>{" "}
          <div className="unit-text">
            <label htmlFor="race">Race</label>
            <select name="" id="race">
              <option value="">African</option>
              <option value="">Test</option>
            </select>
          </div>
          <button>{props.inforData.addButtonType}</button>
        </div>
      </div>
    </div>
  );
};

const SourceIngestor = () => {
  const [editSourceMode, setEditmode] = useState(false);
  const [completeStatus, setCompleteStatus] = useState("No");
  const [currentTab, setCurrentTab] = useState("");
  const [saveButton, setSaveButton] = useState("Save Source");
  const [editButton, setEditButton] = useState("Edit Source");


  const handleEditMode = () => {
    setEditmode(!editSourceMode);
    console.log(editSourceMode, "editMode");
  };

  const handleCompleteStatus = (e) => {
    console.log(e.target, "selectOption");
    setCompleteStatus(e.target.value);
  };

  const handleTabSource = (sr) => {

    setCurrentTab(sr);

    if(sr === '1'){
      setEditButton("Edit Source")
      setSaveButton("Save Source")
    }
    if(sr === '2'){
      setEditmode(false)
    }
    if(sr === '4'){
      setEditmode(false)
    }
    if(sr === '3'){
      setEditButton("Edit Mentions")
      setSaveButton("Save Mention")
    }
  };
  return (
    <div>
      <div className="row ml-0 mt-3 mr-3 ingestor-container">
        {/*Component Container Start*/}
        <div className="col nopadding ingestor-border ingestor-layout-flow">
          {/*Tab Navs*/}
          <ul id="ingestor-tabs" className="nav nav-tabs mt-3">
            <li className="nav-item ingestor-sidetab">
              <a
                className="nav-link"
                href="#tab-places"
                tabIndex={1}
                role="tab"
                data-toggle="tab"
              />
            </li>
            <li className="nav-item">
              <a
                className="nav-link active"
                href="#tab-sources"
                tabIndex={0}
                role="tab"
                data-toggle="tab"
                onClick={() => {
                  handleTabSource("1");
                }}
              >
                Sources <br />
                <span id="source-total" className="ingestor-normal-text">
                  (Total 0)
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#tab-places"
                tabIndex={1}
                role="tab"
                data-toggle="tab"
                onClick={() => {
                  handleTabSource("2");
                }}
              >
                Places <br />
                <span className="ingestor-normal-text">(Total 0)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#tab-mentions"
                tabIndex={2}
                role="tab"
                data-toggle="tab"
                onClick={() => {
                  handleTabSource("3");
                }}
              >
                Mentions
                <br />
                <span id="mentions-total" className="ingestor-normal-text">
                  (Total 0)
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#tab-keywords"
                tabIndex={3}
                role="tab"
                data-toggle="tab"
                onClick={() => {
                  handleTabSource("4");
                }}
              >
                Keywords <br />
                <span id="keywords-total" className="ingestor-normal-text">
                  (Total 0)
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#tab-checklists"
                tabIndex={4}
                role="tab"
                data-toggle="tab"
                onClick={() => {
                  handleTabSource("5");
                }}
              >
                Checklist <br />
                <span id="checklists-total" className="ingestor-normal-text">
                  (Total 0)
                </span>
              </a>
            </li>
          </ul>
          {/*End Tab Navs*/}
          {/*Tab Content*/}
          <div className="tab-content" id="nav-tab-content">
            {/*Sources*/}
            <div
              className="tab-pane ml-4 mt-4 active"
              id="tab-sources"
              role="tabpanel"
            >
              {/*Source Type Editor*/}
              {editSourceMode ? (
                <SourceSelector
                  inforData={{
                    headerTitle: "Select the Source Type",
                    buttonOne: "Primary",
                    buttonTwo: "Secondary",
                    captureLabel: "Person Name",
                    addButtonType: "Add to Source List",
                  }}
                />
              ) : (
                ""
              )}

              {/*End Source Type Editor*/}
              <br />
              <b>Source List</b>
              <br />
              <div id="source"></div>

              <div id="source-list">
                <div className="headers">
                  <span className="name">Name</span>
                  <span className="affiliation">Affiliation</span>
                  <span className="age">Age</span>
                </div>
                <ul>
                  <li>
                    <div className="article-item">
                      <div className="top">
                        <span className="name">Mayihlome Tshwete</span>
                        <span className="org">
                          Government - Finance Specialist in
                        </span>
                        <span className="group">Adult</span>
                        <span className="gender">Male</span>
                        <span className="race">Black</span>
                      </div>

                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="title">
                              “The minister is appreciative to the South
                              African-based lenders, who extended the loans.”
                            </span>
                            <a href="">-EDIT</a>
                          </li>
                          <li>
                            <span className="title">
                              “The minister is appreciative to the South
                              African-based lenders, who extended the loans.”
                            </span>
                            <a href="">-EDIT</a>
                          </li>
                          <li>
                            <span className="title">
                              “The minister is appreciative to the South
                              African-based lenders, who extended the loans.”
                            </span>
                            <a href="">-EDIT</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="article-item">
                      <div className="top">
                        <span className="name">Mayihlome Tshwete</span>
                        <span className="org">
                          Government - Finance Specialist in
                        </span>
                        <span className="group">Adult</span>
                        <span className="gender">Male</span>
                        <span className="race">Black</span>
                      </div>

                      <div className="bottom">
                        <ul>
                          <li>
                            <span className="title">
                              “The minister is appreciative to the South
                              African-based lenders, who extended the loans.”
                            </span>
                            <a href="">-EDIT</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/*Places*/}
            <div className="tab-pane ml-4 mt-4" id="tab-places" role="tabpanel">
              <div
                style={{
                  width: "70%",
                  height: "300px",
                  display: "flex",
                  overflow: "hidden",
                }}
              >
                <Map />

                <div style={{ width: "200px", paddingLeft: "20px" }}>
                  <div className="places-header">Place List</div>
                  <div className="places-sub-header">Johannesburg</div>
                  <div className="places-sub-header">Cape Town</div>
                </div>
              </div>
            </div>
            {/*Mentions*/}
            <div
              className="tab-pane ml-4 mt-4"
              id="tab-mentions"
              role="tabpanel"
            >
              {/*Mentions Type Editor*/}

              {/*Source Type Editor*/}

              {editSourceMode ? (
                <SourceSelector
                  inforData={{
                    headerTitle: "Entity Type",
                    buttonOne: "People",
                    buttonTwo: "Organisation",
                    captureLabel: "Person Name",
                    addButtonType: "Add to Mention List",
                  }}
                />
              ) : (
                ""
              )}
              {/*End Source Type Editor*/}
              <br />
              <b>Mention List</b>
              <br />
              <div id="mention">
                <table
                  id="mentions"
                  className="table table-borderless ingestor-sourcelist"
                  style={{ width: "98%", marginLeft: "5px" }}
                >
                  <thead>
                    <tr>
                      <th scope="col" className="nobold">
                        Name
                      </th>
                      <th scope="col" className="nobold">
                        Affiliation
                      </th>
                      <th
                        scope="col"
                        className="nobold"
                        style={{ float: "right" }}
                      >
                        Relevance
                      </th>
                    </tr>
                  </thead>
                  <tbody id="mslist-loader" className="nopadding">
                    <tr>
                      <td scope="col">None identified</td>
                      <td scope="col" />
                      <td scope="col" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/*Keywords*/}
            <div
              className="tab-pane ml-4 mt-4"
              id="tab-keywords"
              role="tabpanel"
            >
              <br />
              <b>Keywords List</b>
              <br />
              <div id="keywords">
                <div id="keyword-list" className="col-0 mt-2 ml-0"></div>
              </div>
            </div>
            {/*Checklists*/}
            <div
              className="tab-pane ml-4 mt-4"
              id="tab-checklists"
              role="tabpanel"
            >

              <br />
              <b>Keywords List</b>
              <br />
              <div id="keywords">
                <div id="keyword-list" className="col-0 mt-2 ml-0"></div>
              </div>
            </div>
          </div>
          {/*End Tab Content*/}
          {/*End Tabs*/}
          {/*Footer for ingestor*/}
          <footer
            id="ingestor-footer"
            className="ingestor-footer"
            style={
              editSourceMode
                ? { background: "#3C978F", color: "#fff" }
                : { background: "#fff", color: "#fff" }
            }
          >
            <div>
              <span>
                <div
                  className="row mt-3 ml-3"
                  style={{ width: "385px" }}
                  id="ingestor-footer"
                >
                  <button
                    id="ingestor-edit-button"
                    type="button"
                    className="ingestor-edit-button"
                    onClick={handleEditMode}
                    style={
                      editSourceMode
                        ? {
                            background: "#f90",
                            color: "#fff",
                            borderColor: "#fff",
                          }
                        : {
                            background: "#fff",
                            color: "#000",
                            borderColor: "#000",
                          }
                    }
                  >
                    {editSourceMode ?  saveButton: editButton}
                  </button>
                  <div
                    id="ingestor-sources-label"
                    className="col ingestor-sources-edit-label"
                    style={
                      editSourceMode ? { color: "#fff" } : { color: "#000" }
                    }
                  >
                    Sources Complete
                  </div>
                  <div
                    id="ingestor-sources-status"
                    className="col ingestor-sources-status-label"
                  >
                    {editSourceMode ? (
                      <select
                        value={completeStatus}
                        name=""
                        id=""
                        onChange={handleCompleteStatus}
                        style={{
                          height: "30px",
                          fontSize: "15px",
                          color: "#000",
                        }}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    ) : (
                      <span
                        style={
                          completeStatus === "Yes"
                            ? { color: "#B3D194" }
                            : { color: "#EC9180" }
                        }
                      >
                        {completeStatus}
                      </span>
                    )}
                  </div>
                  <div
                    className="col elips"
                    style={{ display: "inline-flex", padding: "3px" }}
                  >
                    <i
                      id="ingestor-sources-ellipsis"
                      className="fas fa-lg fa-ellipsis-v ingestor-sources-fa"
                    />
                    <i
                      id="ingestor-sources-bars"
                      className="fas fa-lg fa-bars ingestor-sources-fa"
                    />
                  </div>
                </div>
              </span>
            </div>
          </footer>
        </div>
      </div>
      {/*Template for sourcelist*/}
      <template id="ingestor-sourcelist" />
      {/*Template keywords*/}
      <template id="keywords" />
      {/*Template Checklists*/}
      <template id="checklists" />
      {/*Template for mentionlist*/}
      <template id="ingestor-mentionslist" />
      {/*Hidden*/}
      <input type="hidden" id="checklists-count" defaultValue={-1} />
      <input type="hidden" id="status" defaultValue="Yes" />
      <input type="hidden" id="checklists-status" defaultValue="Yes" />
      <input type="hidden" id="mentions-status" defaultValue="No" />
      <input type="hidden" id="checklists-status" defaultValue="No" />
    </div>
  );
};

export default SourceIngestor;
