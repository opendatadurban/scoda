import React, { useEffect } from "react";
// import $ from "jquery";

const data = [
  {
    category: "Perfomance Ranking",
    entries: [
      {
        name: "Andile Xaba",
        number: "1",
      },
      {
        name: "James Juole",
        number: "1",
      },
      {
        name: "Senzo Xaba",
        number: "1",
      },
      {
        name: "Andile Xaba",
        number: "1",
      },
    ],
  },
  {
    category: "Articles Completed",
    entries: [
      {
        name: "Andile Xaba",
        number: "1",
      },
      {
        name: "James Juole",
        number: "1",
      },
      {
        name: "Senzo Xaba",
        number: "1",
      },
      {
        name: "Andile Xaba",
        number: "1",
      },
    ],
  },
  {
    category: "Ave. Referrals/Article",
    entries: [
      {
        name: "Andile Xaba",
        number: "1",
      },
      {
        name: "James Juole",
        number: "1",
      },
      {
        name: "Senzo Xaba",
        number: "1",
      },
      {
        name: "Andile Xaba",
        number: "1",
      },
    ],
  },
];

const CardCollapsableTable = () => {
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      $(`.status-arrow-${i}`).click(function() {
        if ($(`#card-list-${i}`).is(":visible")) {
          $(`#card-list-${i}`).slideUp("slow", function() {

            $(`.status-arrow-${i}`).css("transform", "rotate(-45deg)");

            $(`#card-list-${i}`).clearQueue();
          });
        }

        if (!$(`#card-list-${i}`).is(":visible")) {
          $(`#card-list-${i}`).slideDown("slow", function() {

            $(`.status-arrow-${i}`).css("transform", "rotate(0deg)");

            $(`#card-list-${i}`).clearQueue();

          });
        }
      });
    }
  });

  const handleClick = (e) => {
   // console.log("clickEvent ", e.target);
  };

  return (
    <div>
      <ul id="collapsable-cards-container">
        {data.map((i, key) => {
        //  console.log("keyFor", key);
          return (
            <li>
              <div id="collapsable-card-table">
                <div className="data-card-header">
                  <span className="title">Monitor: {i.category}</span>
                  <button className="show-list"></button>
                  <span
                    className={`status-arrow  status-arrow-${key}`}
                    key={key}
                    onClick={handleClick}
                  >
                    <i
                      className={`fas fa-angle-left status-arrow  status-arrow-${key}`}
                    ></i>
                  </span>
                </div>
                <ul className="card-list" id={`card-list-${key}`}>
                  {i.entries.map((entry) => {
                    return (
                      <li>
                        <span className="name">{entry.name}</span>{" "}
                        <span className="number">{entry.number}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardCollapsableTable;
