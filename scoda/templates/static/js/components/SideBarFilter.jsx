import React, { useState,useEffect } from "react";
import $ from "jquery";






const SideBarFilter = () => {




  const [stateCapture, setStateCapture] = useState(false)
  const [election, setElection] = useState(false)
  const [woman, setWoman] = useState(false)
  const [child, setChild] = useState(false)


  const handleStateCapture =()=>{
    setStateCapture(!stateCapture)
  }

 const handleElection=()=>{
    setElection(!election)

  } 

  const handleWoman=()=>{
    setWoman(!woman)
  }

  const handleChild=()=>{
    setChild(!child)
  }
  


  
  return (
    <div id="sidebar-filter">
      <div id="filter-head">
        <button id="stack-icon"></button>
        <span className="filter">Filters</span>
        <span className="drop-down">
          {" "}
          <i className="fas fa-angle-left"></i>
        </span>
        <button id="stack-right-icon"></button>
      </div>
      <div id="filter-body">
        <form action="">
          <span className="sub-header">
            Monitor Groups <span className="add"> &#43;</span>
          </span>

          <div className="form-group elections-options">
            <div className="elections-head" id="election-members" onClick={handleElection}>
              Elections
            </div>
            <ul id="elections" style={{display:election? "block": "none"}}>
              <li>
                <label className="container-1">
                  <input type="checkbox"  />
                  All Monitors
                  <span className="checkmark-1"></span>
                </label>
                <ul>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Andil Xaba
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Peter Taylor
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Sizwe Monyela
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Thato Nzimande
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                </ul>
              </li>
            </ul>
            
          </div>

          <div className="form-group elections-options">
            <div className="elections-head" id="state-capture" onClick={handleStateCapture}>
              State Capture
            </div>

              <ul id="state"  style={{display:stateCapture?"block":"none"}} >
              <li>
                <label className="container-1">
                  <input type="checkbox"  />
                  All Monitors
                  <span className="checkmark-1"></span>
                </label>
                <ul>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Andil Xaba
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Peter Taylor
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Sizwe Monyela
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Thato Nzimande
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                </ul>
              </li>
            </ul>
            


        
            
          </div>

          <div className="form-group elections-options">
            <div className="elections-head" id="woman-in-media" onClick={handleWoman}>
              Woman in Media
            </div>


<ul id="woman"   style={{display:woman?"block":"none"}}>
              <li>
                <label className="container-1">
                  <input type="checkbox"  />
                  All Monitors
                  <span className="checkmark-1"></span>
                </label>
                <ul>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Andil Xaba
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Peter Taylor
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Sizwe Monyela
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                  <li>
                    <label className="container-1">
                      <input type="checkbox"  />
                      Thato Nzimande
                      <span className="checkmark-1"></span>
                    </label>
                  </li>
                </ul>
              </li>
            </ul>

          </div>

          <div className="form-group elections-options">
            <div className="elections-head" id="child-articles" onClick={handleChild}>
              Child Related Aricles
            </div>

 <ul id="child"   style={{display:child?"block":"none"}}>
 <li>
   <label className="container-1">
     <input type="checkbox"  />
     All Monitors
     <span className="checkmark-1"></span>
   </label>
   <ul>
     <li>
       <label className="container-1">
         <input type="checkbox"  />
         Andil Xaba
         <span className="checkmark-1"></span>
       </label>
     </li>
     <li>
       <label className="container-1">
         <input type="checkbox"  />
         Peter Taylor
         <span className="checkmark-1"></span>
       </label>
     </li>
     <li>
       <label className="container-1">
         <input type="checkbox"  />
         Sizwe Monyela
         <span className="checkmark-1"></span>
       </label>
     </li>
     <li>
       <label className="container-1">
         <input type="checkbox"  />
         Thato Nzimande
         <span className="checkmark-1"></span>
       </label>
     </li>
   </ul>
 </li>
</ul>
          </div>

          <span className="sub-header">Progress</span>
          <div className="form-group kill-margin">
            <label className="container-1">
              <input type="checkbox"  />
              Unassigned
              <span className="checkmark-1"></span>
            </label>
          </div>
          <div className="form-group kill-margin">
            <label className="container-1">
              <input type="checkbox"  />
              In Progress
              <span className="checkmark-1"></span>
            </label>
          </div>
          <div className="form-group kill-margin">
            <label className="container-1">
              <input type="checkbox"  />
              Complete
              <span className="checkmark-1"></span>
            </label>
          </div>

          <span className="sub-header">Date Added</span>
          <div className="form-group">
            <p>
              <input type="radio" id="test1" name="radio-group" checked />
              <label for="test1">Last 24 Hours</label>
            </p>
            <p>
              <input type="radio" id="test2" name="radio-group" />
              <label for="test2">Last 7 Days </label>
            </p>
            <p>
              <input type="radio" id="test3" name="radio-group" />
              <label for="test3">Last Month</label>
            </p>
            <p>
              <input type="radio" id="test3" name="radio-group" />
              <label for="test3">View All </label>
            </p>
          </div>

          <button type="submit" id="apply-filters">
            Apply Filters
          </button>
        </form>
      </div>
    </div>
  );
};
export default SideBarFilter;
