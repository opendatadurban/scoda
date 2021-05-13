import React, { Component } from "react";
import DataStoriesContentCardContentBlock from '../components/DataStories.Content.Card.ContentBlock'
import Barchart from '../components/BarChart';
import 'chartjs-plugin-annotation';

const options = {

    legend: {
        display: true,
        position: 'top',
        labels: {
           
            fontSize:14,
            fontFamily:"Montserrat",
            fontColor:'#4A4A4A',

        }
    },
    plugins: {
        
      datalabels: {
        display: false,
        color: '#4A4A4A',
   
        align:100,
        formatter: (value, ctx) => {
            return "R"+value
          }

      }
    },
    title: {
      display: true,
      text: 'Absolute Number of Murders',
      position: 'left',
      fontSize : 18,
      fontColor:'#4A4A4A',
      fontFamily: "Montserrat",
      padding:20,
    },
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        display:true,
        scaleShowLabels: false,
  
        stacked: false,
        gridLines: {
            display:true,
          borderDash: [3, 6],
          color: "black",
        },
        ticks: {
          fontColor: "#4A4A4A",
          fontFamily: "Montserrat",
          fontSize: 16,
          fontStyle: 600,
        }
      }],
      yAxes: [{

        ticks: {
          fontSize:14,
          fontFamily: "Montserrat",
          fontColor:'#4A4A4A',
          beginAtZero: true,
          
          stepSize: 500,
          max: 3000,
          min: 0,
          callback: function (value, index, values) {
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);
            
            // Convert the array to a string and format the output
            value = value.join(' ');
            return value;

        }
         
  
        },
      }]
  
    },
  
  }
  const data = {
    labels: ['JHB','CPT','ETH','EKU','TSH','NMB','MAN','BCM','MSU'],
    datasets: [
      {
        label: 'Number of Murders',
        backgroundColor: "#FDB863",
        borderWidth: 1,
        hoverBackgroundColor: "#FDB863",
        
        data: [1450,2891,1900,1380,730,2200,1490,2800,1700],
      },
      {
        label: 'Murder Rate Per 100 000',
        backgroundColor: "#E66101",
        borderWidth: 1,
        hoverBackgroundColor: "#E66101",
        
        data: [1474,2391,1453,1000,480,612,250,253,250],
      }
    ]
  };
export default class CrimeResearch extends Component {
    render() {
        return (
            <div>
              <div className="mb-5">
              <DataStoriesContentCardContentBlock
                    contentHeading="Why is there a need to focus crime research on cities?"
                    content="The need to focus research on cities is because national crime statistics do not reveal the actual distribution of crime and violence. City level data is therefore essential. For example, some South African metros record murder rates above the national average."
                />
              </div>


                <Barchart
                    height="130"
                    options={options}
                    data={data}
                    heading="Absolute number of murders compared to murder rates per 100 00 (2017/2018)"
                    title=""
                    source=""

                />
            </div>
        )
    }
}