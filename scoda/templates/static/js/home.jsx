import React from 'react';
import ReactDOM from 'react-dom';
import routes from "./home";

ReactDOM.render(routes, document.getElementById("content-scoda"));

// Redirect to /#/home
// var root_url = window.location.origin + '/scoda/#/'
// if (document.location.href == root_url) {
//   var new_url = window.location.origin + '/scoda/#/home';
//   location.replace(new_url);
// }
