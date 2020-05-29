import React from "react";
import {
  HashRouter,
  Route,
  hashHistory,
  BrowserRouter as Router,
} from "react-router-dom";

import DisplayPreviewTabs from "./components/DisplayPreviewTabs";
import SideBarFilter from "./components/SideBarFilter";
import SideBarArticleMetadata from "./components/SideBarArticleMetadata";
import SourceIngestor from "./components/SourceIngestor";

// import more components
export default (
  <div className="App">
    <Router>
      <Route path="/" component={DisplayPreviewTabs} />
    </Router>
  </div>
);
