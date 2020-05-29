import React, { useEffect, useState } from "react";
// import * as _ from "lodash";
// import "select2"; // globally assign select2 fn to $ element
// // import "select2/dist/css/select2.css";
import $ from "jquery";
import SideBarFilter from "./SideBarFilter";
import CardCollapsableTable from "./CardCollapsableTable";
import WizardAddArticle from "./WizardAddArticle";

const data = [
  {
    date: "03 October 2019",
    articles: [
      {
        title:
          "Where do we come from like where exactly do we come from and how is it working there",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "P",
        places: "P",
        mentions: "P",
        notes: 4,
      },
      {
        title:
          "Where do we come from like where exactly do we come from and how is it working there",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "R",
        places: "P",
        mentions: "P",
        notes: 1,
      },
      {
        title:
          "Where do we come from like where exactly do we come from and how is it working there",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "R",
        places: "P",
        mentions: "P",
        notes: 1,
      },
      {
        title:
          "Where do we come from like where exactly do we come from and how is it working there",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "R",
        places: "P",
        mentions: "P",
        notes: 1,
      },
      {
        title:
          "Where do we come from like where exactly do we come from and how is it working there",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "R",
        places: "P",
        mentions: "P",
        notes: 1,
      },
      {
        title:
          "Where do we come from like where exactly do we come from and how is it working there",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "R",
        places: "P",
        mentions: "P",
        notes: 1,
      },
      {
        title:
          "Where do we come from like where exactly do we come from and how is it working there",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "R",
        places: "P",
        mentions: "P",
        notes: 1,
      },
      {
        title:
          "Where do we come from like where exactly do we come from and how is it working there",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "R",
        places: "P",
        mentions: "P",
        notes: 1,
      },
      {
        title:
          "Where do we come from like where exactly do we come from and how is it working there",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "P",
        places: "P",
        mentions: "P",
        notes: 1,
      },
    ],
  },
  {
    date: "02 October 2019",
    articles: [
      {
        title:
          "Where do we come from like where exactly do we come from and how is it working there",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "P",
        places: "P",
        mentions: "P",
        notes: 1,
      },
    ],
  },
  {
    date: "01 October 2019",
    articles: [
      {
        title: "Birds can sing",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "P",
        places: "P",
        mentions: "P",
        notes: 1,
      },
      {
        title: "Birds can sing",
        author: "Tyler Ross",
        medium: "DM",
        article: "P",
        monitor: "Sizwe Khanyi",
        type: "P",
        sources: "P",
        places: "P",
        mentions: "P",
        notes: 1,
      },
    ],
  },
];

const compare = (a, b) => {
  const articleA = a.date.toUpperCase();
  const articleB = b.date.toUpperCase();
  let comparison = 0;
  if (articleA < articleB) {
    comparison = 1;
  } else if (articleA > articleB) {
    comparison = -1;
  }
  return comparison;
};

const SubHeader = (props) => {
  return (
    <div className="sub-header article-item ">
      <div className="span-30">
        <span className="article-date">{props.date}</span>
        <span className="count">{` (${props.articleCount} Articles)`}</span>
      </div>
      <div className="span-20"></div>
      <div className="span-10"></div>
      <div className="span-10"></div>
      <div className="span-10"></div>
      <div className="span-10"></div>
      <div className="span-10"></div>
    </div>
  );
};

const PaginationBar = () => {
  useEffect(() => {
    window.$("#pages").pagination({
      dataSource: [1, 2, 3, 4, 5, 6, 7, 40],
      pageSize: 5,
      showGoInput: true,
      showGoButton: true,
      callback: function(data, pagination) {
        // template method of yourself
        // var html = template(data);
        // dataContainer.html(html);
      },
    });
  });

  return (
    <div>
      <div id="pagination">
        <button
          type="button"
          data-toggle="modal"
          data-target="#sampleModal"
          id="showModal"
        >
          + Add Article
        </button>
        <WizardAddArticle />
        <div className="selected-article">Selected Article</div>
        <div className="share-page">Share this page</div>
        <div className="pages" id="pages"></div>
      </div>
      <div className="sub-header top">
        <div className="span-30">Article Title</div>
        <div className="span-20">Monitor</div>
        <div className="span-10">Article</div>
        <div className="span-10">Sources</div>
        <div className="span-10">Places</div>
        <div className="span-10">Mentions</div>
        <div className="span-10">Notes</div>
      </div>
    </div>
  );
};

const DisplayPreviewTabs = () => {
  const [sortedArticles, setSortedArticles] = useState([]);

  useEffect(() => {
    window.$(".js-example-basic-single").select2();
    window.$("#pages").pagination({
      dataSource: [1, 2, 3, 4, 5, 6, 7, 195],
      pageSize: 6,

      callback: function(data, pagination) {
        // template method of yourself
        // var html = template(data);
        // dataContainer.html(html);
        console.log(data, "dataSrc");
      },
    });

    setSortedArticles(data);
    console.log("articlesArray", sortedArticles[0]);
  }, [sortedArticles]);

  const [items] = useState([
    {
      label: "Luke Skywalker",
      value: "Luke Skywalker",
    },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" },
  ]);

  return (
    <div id="main-container">
      <SideBarFilter />
      <div id="display-tabs-container">
        <div className="header">Monitor Progress</div>
        <div className="article-data">
          <div className="sub-div">
            <div className="count">1</div>
            <div className="category">Unassigned Articles</div>
          </div>
          <div className="sub-div">
            <div className="count">1</div>
            <div className="category">Unassigned Articles</div>
          </div>
          <div className="sub-div">
            <div className="count">1</div>
            <div className="category">Unassigned Articles</div>
          </div>
          <div className="sub-div">
            <div className="count">1</div>
            <div className="category">Unassigned Articles</div>
          </div>
        </div>

        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="firstButton"
              data-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Article List
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="secondButton"
              data-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Overview
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div id="middle-content">
              <PaginationBar />

              {sortedArticles.length > 0
                ? sortedArticles.map((item) => {
                    return (
                      <div>
                        <SubHeader
                          date={item.date}
                          articleCount={item.articles.length}
                        />
                        {item.articles.map((i) => {
                          return (
                            <div className="sub-header article-item ">
                              <div className="span-30">
                                <span className="container-2">
                                  <input type="checkbox" />
                                  <span className="checkmark-2"></span>
                                  <span>{i.title}</span>
                                </span>
                              </div>
                              <div className="span-20">
                                <select
                                  className="js-example-basic-single"
                                  name="state"
                                >
                                  {items.map((item) => (
                                    <option key={item.value} value={item.value}>
                                      {item.label}
                                    </option>
                                  ))}
                                </select>{" "}
                              </div>
                              <div className="span-10 article">
                                <span
                                  style={{
                                    background:
                                      i.article === "P" ? "red" : "blue",
                                  }}
                                >
                                  {i.article}
                                </span>
                              </div>
                              <div className="span-10 sources">
                                <span
                                  style={{
                                    background:
                                      i.sources === "P" ? "red" : "blue",
                                  }}
                                >
                                  {i.sources}
                                </span>
                              </div>
                              <div className="span-10 places">
                                <span
                                  style={{
                                    background:
                                      i.places === "P" ? "red" : "blue",
                                  }}
                                >
                                  {i.places}
                                </span>
                              </div>
                              <div className="span-10 mentions">
                                <span
                                  style={{
                                    background:
                                      i.mentions === "P" ? "red" : "blue",
                                  }}
                                >
                                  {i.mentions}
                                </span>
                              </div>
                              <div className="span-10 notes">{i.notes}</div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <CardCollapsableTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPreviewTabs;
