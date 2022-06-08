import React from "react";
import HumanResourcesData from "../../data/HumanResourceData";
import $ from 'jquery'

const Table = () => {
    // Change the selector if needed
    var $table = $('table.scroll'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;

    // Adjust the width of thead cells when window resizes
    $(window).resize(function() {
    // Get the tbody columns width array
    colWidth = $bodyCells.map(function() {
        return $(this).width();
    }).get();

    // Set the width of thead columns
    $table.find('thead tr').children().each(function(i, v) {
        $(v).width(colWidth[i]);
    });    
    }).resize(); // Trigger resize handler
  return (
    <div className="post_breakdown-container">
      <h1>Municipal Post Breakdown: Indicators</h1>
       <div>
       <table className="scroll">
        <thead>
            <tr>
            <th className="table-width">Code</th>
            <th className="">Name</th>
            </tr>
        </thead>
         <tbody className="table-scoll">
        {HumanResourcesData.map((item, i) => (
          <tr key={i} >
            <td className="table-width"><p className="code">{item.codebook_id}</p></td>
            <td >
              <p>Total number of municipal posts{item.department}</p>
              <a href={item.link} target="_blank">
                    View Indicator in the Codebook
              </a>
               <div className=""></div>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
       </div>

    </div>
  );
};
export default Table;
