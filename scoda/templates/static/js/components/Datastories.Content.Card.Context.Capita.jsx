import React, { Component } from 'react';
import Barchart from '../components/BarChart';


const options = {
    legend: {
        display: false,
        position: 'bottom',
        labels: {
           
            fontSize:14,
            fontFamily:"Montserrat",
            fontColor:'#4A4A4A',

        }
    },
    plugins: {
      datalabels: {
        display: true,
        color: '#4A4A4A',
        anchor:'end',
        align:'center',
        labels: {
          fontStyle: 'bold',
        },
        formatter: (value, ctx) => {
            return "R"+value
          }

      }
    },
    title: {
      display: true,
      text: 'Real GVA per capita in 2013',
      position: 'left',
      fontSize : 18,
      fontColor:'#4A4A4A',
      fontFamily: "Montserrat",
      padding:20,
    },
    maintainAspectRatio: true,
    scales: {
      xAxes: [{
        display:true  ,
        scaleShowLabels: false,
  
        stacked: true,
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
          
          stepSize: 10000,
          max: 70000,
          min: 0,
          callback: function (value, index, values) {
            value = value.toString();
            value = value.split(/(?=(?:...)*$)/);
            
            // Convert the array to a string and format the output
            value = value.join(' ');
            return "R"+value;

        }
         
  
        },
      }]
  
    },
  
  }
  const data = {
    labels: ['CPT','BUFF','EKU','ETH','JHB','MAN','MSU','NMB','TSH','SA'],
    datasets: [
      {
        label: '',
        backgroundColor: "#92C5DE",
        borderWidth: 1,
        hoverBackgroundColor: "#92C5DE",
        
        data: [53974,36891,50953,41315,56418,42904,36316,38717,62939,34299],
      }
    ]
  };

export default class Capita extends Component {
    render() {
        return (
            <div className="mt-4">
                <Barchart
                    options={options}
                    data={data}
                    heading="Per capita income or real GVA per capita (2013)"
                    title="SOURCE:"
                    source="SOURCE: Quantec Research (2015)"
                    
                />
            </div>
        )
    }
}