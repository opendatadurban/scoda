import React,{ Component } from 'react'
import Select from "react-select";
import Button from './Button';
import Switch_text from './Switch_text'
import axios from 'axios';
import { Container, Row, Col, Modal, ModalBody, Spinner } from 'reactstrap';

let a = true;
let years = []
let lineChartData = { 'datasets':[]}


//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.
let fbs_data_2018 = [76201, 320406, 15848, 237330, 174687, 29658, 73593, 57250]
let fbs_data_2019 = [80831, 315246, 11520, 226118, 191033, 32105, 63706, 52926]

let fbs_2018_perc = []
let fbs_2019_perc = []
let fbs_2018_data = []
let fbs_2019_data = []

let water_supply = []
let basic_sani =   []
let access_to_elec = []
let refuse_removal =[]
let numberOfHousehold=[]

let water_supply_data = []
let water_supply_clean = []
let final_water_supply = []
let waterSupplyCollection = [];

let basic_sanitation_data = []
let basic_sanitation_clean = []
let final_basic_sanitation = []
let basicSanitationCollection = [];

let access_to_elec_data = []
let access_to_elec_clean = []
let final_access_elec = []
let accessElecCollection = []

let refuse_removal_data =[]
let access_to_refuse_clean = []
let refuseRemovalCollection = []
let final_refuse_removal = []

let number_of_households_data = []
let number_of_households_clean = []
let numOfHouseholdCollection = []
let final_num_of_household = []


//chart declarations
var chartRef1,chartRef2,chartRef3,chartRef4,chartRef5,chartRef6

//City and year data
let sortedData = ["BUF", "CCT", "EKH", "ETK","JHB", "MAN", "NMB", "TSH"]

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.

let free_basic_services_2018= fbs_data_2018
let free_basic_services_2019 = fbs_data_2019

let free_basic_services_clean_2017= fbs_data_2018
let free_basic_services_clean_2018 = fbs_data_2019

let myData = [] 

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.

let free_basic_services_sortedNumber2= []
let free_basic_services_sortedNumber3= []  

const style = {
  control: (base, state) => ({
    ...base,
    border: '1px solid #4A4A4A',
    borderRadius:'12.5px',
    boxShadow: 'none',
    '&:hover': {
        border: '1px solid #4A4A4A',
        borderRadius:'12.5px',
    }
})
};
export default class Charts_dashboards extends Component {
    constructor() {
        super();
        this.state = {
            stepSize:200000,
            isMulti:true,
            toggle: true,
            loader: false,
            chartYears: 0,
            noYears:[],
            multiValue: [
            { value: "BUF", label: "Buffalo City" },
            { value: "CCT", label: "City of Cape Town" },
            { value: "JHB", label: "City of Joburg" },
            { value: "EKH", label: "Ekurhuleni" },
            { value: "ETK", label: "Ethekwini" },
            { value: "MAN", label: "Mangaung" },
            { value: "NMB", label: "Nelson Mandela Bay" },
            { value: "TSH", label: "Tshwane" }
          ],
          filterOptions: [
            { value: "BUF", label: "Buffalo City" },
            { value: "CCT", label: "City of Cape Town" },
            { value: "JHB", label: "City of Joburg" },
            { value: "EKH", label: "Ekurhuleni" },
            { value: "ETK", label: "Ethekwini" },
            { value: "MAN", label: "Mangaung" },
            { value: "NMB", label: "Nelson Mandela Bay" },
            { value: "TSH", label: "Tshwane" }
          ]
        };
    
        this.handleMultiChange = this.handleMultiChange.bind(this);
        this.switchTrigger = this.switchTrigger.bind(this);
      }
      componentDidMount(){
        this.getYears()
        this.showLoader()
        this.renderChart_percentage_of_household_with_basic_water_supply();
        this.renderChart_percentage_of_households_with_access_to_basic_sanitation();
        this.renderChart_percentage_of_households_with_access_to_electricity();
        this.renderChart_percentage_households_with_weekly_municipal_refuse_removal();
        this.renderChart_total_number_of_households_in_the_municipality();
        this.renderChart_free_basic_services();

        this.percentage_of_household_with_basic_water_supply();
        this.percentage_of_households_with_access_to_basic_sanitation();
        this.percentage_of_households_with_access_to_electricity();
        this.percentage_households_with_weekly_municipal_refuse_removal();
        this.total_number_of_households_in_the_municipality();

      }
      componentDidUpdate(){
        this.renderChart_percentage_of_household_with_basic_water_supply();
        this.renderChart_percentage_of_households_with_access_to_basic_sanitation();
        this.renderChart_percentage_of_households_with_access_to_electricity();
        this.renderChart_percentage_households_with_weekly_municipal_refuse_removal();
        this.renderChart_total_number_of_households_in_the_municipality();
        this.renderChart_free_basic_services();
      }

      showLoader() {
        this.setState({
            loader: true
        });
      }

      hideLoader() {
        this.setState({
            loader: false
        });
      }
      activate(){
        document.getElementById('optionTwo').click();
        document.getElementById('optionOne').click();
      }
      //API
      getYears(){
          axios.get(`/api/explore/codebook?indicator_id=392`).then(res => {
          this.setState({noYears: res.data.years})
          this.state.noYears.shift();
          this.state.noYears.sort();
          years = this.state.noYears
        })

      }
      percentage_of_household_with_basic_water_supply() {
        axios.get(`/api/explore/codebook?indicator_id=392`).then(res => {
          this.getYears()
           let toNum = new Object()
           let years = parseInt(res.data.years[1])
           let startingYear = parseInt(res.data.years.slice(-1)[0])

           let count = 0
           
           let jhb
           let ekh
           let man
           let nmb
           let tsh
           let etk
          this.setState({chartYears: res.data.years})

           for(let i=0;i<res.data.years.length;i++){
              for(let k=0;k<1;k++){
                if(i === 0){}
                else {toNum[2014+i] = i}
              }
           }

           for (let year = startingYear; year < years+1; year++){
               let citydata = [];
               for (let i = 0; i<sortedData.length; i++){
                   let index = i*4+toNum[year];
                
                   citydata.push(res.data.table[index].slice(2,3)[0]);
               }

                //sorting data since its not populated aphabetically in the API.
                jhb = citydata[2]
                ekh = citydata[3] 
                man = citydata[4] 
                nmb = citydata[5] 
                tsh = citydata[6] 
                etk = citydata[7]
                //re-assigning it correctly.
                citydata[4] = jhb
                citydata[2] = ekh
                citydata[5] = man
                citydata[6] = nmb
                citydata[7] = tsh
                citydata[3] = etk

               waterSupplyCollection.push(citydata);
               water_supply.push(waterSupplyCollection[count])
               water_supply_clean.push(water_supply)
               count++
           }

           final_water_supply = water_supply_clean[0]
            //end
            this.activate()
        });
        
      }
      percentage_of_households_with_access_to_basic_sanitation() {
        axios.get(`/api/explore/codebook?indicator_id=384`).then(res => {
               
          let toNum = new Object()
          let years = parseInt(res.data.years[1])
          let startingYear = parseInt(res.data.years.slice(-1)[0])

          let count = 0
          
          let jhb
          let ekh
          let man
          let nmb
          let tsh
          let etk
         
          for(let i=0;i<res.data.years.length;i++){
             for(let k=0;k<1;k++){
               if(i === 0){}
               else {toNum[2014+i] = i}
             }
          }

          for (let year = startingYear; year < years+1; year++){
              let citydata = [];
              for (let i = 0; i<sortedData.length; i++){
                  let index = i*4+toNum[year];
               
                  citydata.push(res.data.table[index].slice(2,3)[0]);
              }

               //sorting data since its not populated aphabetically in the API.
               jhb = citydata[2]
               ekh = citydata[3] 
               man = citydata[4] 
               nmb = citydata[5] 
               tsh = citydata[6] 
               etk = citydata[7]
              //re-assigning it correctly.
               citydata[4] = jhb
               citydata[2] = ekh
               citydata[5] = man
               citydata[6] = nmb
               citydata[7] = tsh
               citydata[3] = etk

               basicSanitationCollection.push(citydata);
               basic_sani.push(basicSanitationCollection[count])
               basic_sanitation_clean.push(basic_sani)
              count++
          }

          final_basic_sanitation = basic_sanitation_clean[0]

           //end
           this.activate()
           

        });
      }

      percentage_of_households_with_access_to_electricity() {
        axios.get(`/api/explore/codebook?indicator_id=10`).then(res => {
          let toNum = new Object()
          let years = parseInt(res.data.years[1])
          let startingYear = parseInt(res.data.years.slice(-1)[0])

          let count = 0
          
          let jhb
          let ekh
          let man
          let nmb
          let tsh
          let etk
         
          for(let i=0;i<res.data.years.length;i++){
             for(let k=0;k<1;k++){
               if(i === 0){}
               else {toNum[2014+i] = i}
             }
          }

          for (let year = startingYear; year < years+1; year++){
              let citydata = [];
              for (let i = 0; i<sortedData.length; i++){
                  let index = i*4+toNum[year];
               
                  citydata.push(res.data.table[index].slice(2,3)[0]);
              }

               //sorting data since its not populated aphabetically in the API.
               jhb = citydata[2]
               ekh = citydata[3] 
               man = citydata[4] 
               nmb = citydata[5] 
               tsh = citydata[6] 
               etk = citydata[7]
              //re-assigning it correctly.
               citydata[4] = jhb
               citydata[2] = ekh
               citydata[5] = man
               citydata[6] = nmb
               citydata[7] = tsh
               citydata[3] = etk

               accessElecCollection.push(citydata);
               access_to_elec.push(accessElecCollection[count])
               access_to_elec_clean.push(access_to_elec)
              count++
          }

          final_access_elec = access_to_elec_clean[0]

           //end
           this.activate()

        });
      }
      percentage_households_with_weekly_municipal_refuse_removal() {
        axios.get(`/api/explore/codebook?indicator_id=1114`).then(res => {
          let toNum = new Object()
          let years = parseInt(res.data.years[1])
          let startingYear = parseInt(res.data.years.slice(-1)[0])

          let count = 0
          
          let jhb
          let ekh
          let man
          let nmb
          let tsh
          let etk
         
          for(let i=0;i<res.data.years.length;i++){
             for(let k=0;k<1;k++){
               if(i === 0){}
               else {toNum[2014+i] = i}
             }
          }

          for (let year = startingYear; year < years+1; year++){
              let citydata = [];
              for (let i = 0; i<sortedData.length; i++){
                  let index = i*4+toNum[year];
               
                  citydata.push(res.data.table[index].slice(2,3)[0]);
              }

               //sorting data since its not populated aphabetically in the API.
               jhb = citydata[2]
               ekh = citydata[3] 
               man = citydata[4] 
               nmb = citydata[5] 
               tsh = citydata[6] 
               etk = citydata[7]
              //re-assigning it correctly.
               citydata[4] = jhb
               citydata[2] = ekh
               citydata[5] = man
               citydata[6] = nmb
               citydata[7] = tsh
               citydata[3] = etk

               refuseRemovalCollection.push(citydata);
               refuse_removal.push(refuseRemovalCollection[count])
               access_to_refuse_clean.push(refuse_removal)
              count++
          }

          final_refuse_removal = access_to_refuse_clean[0]
           //end
           this.activate()
        });
      }

      total_number_of_households_in_the_municipality() {
        axios.get(`/api/explore/codebook?indicator_id=12`).then(res => {
          let toNum = new Object()
          let years = parseInt(res.data.years[1])
          let startingYear = parseInt(res.data.years.slice(-1)[0])

          let count = 0
          
          let jhb
          let ekh
          let man
          let nmb
          let tsh
          let etk
         
          for(let i=0;i<res.data.years.length;i++){
             for(let k=0;k<1;k++){
               if(i === 0){}
               else {toNum[2014+i] = i}
             }
          }

          for (let year = startingYear; year < years+1; year++){
              let citydata = [];
              for (let i = 0; i<sortedData.length; i++){
                  let index = i*4+toNum[year];
               
                  citydata.push(res.data.table[index].slice(2,3)[0]);
              }

               //sorting data since its not populated aphabetically in the API.
               jhb = citydata[2]
               ekh = citydata[3] 
               man = citydata[4] 
               nmb = citydata[5] 
               tsh = citydata[6] 
               etk = citydata[7]
              //re-assigning it correctly.
               citydata[4] = jhb
               citydata[2] = ekh
               citydata[5] = man
               citydata[6] = nmb
               citydata[7] = tsh
               citydata[3] = etk

               numOfHouseholdCollection.push(citydata);
               numberOfHousehold.push(numOfHouseholdCollection[count])
               number_of_households_clean.push(numberOfHousehold)
              count++
          }

          final_num_of_household = number_of_households_clean[0]
           //end
           this.activate()
            this.hideLoader();

        });
      }

     switchTrigger(){
       


       this.setState({
         toggle: !this.state.toggle

       });
       if (!this.state.toggle) {
         a = false
         fbs_2018_data = free_basic_services_clean_2017
         fbs_2019_data = free_basic_services_clean_2018
         this.setState({stepSize:200000})
       }
       else {
         a = true
         for(let i=0;i<free_basic_services_clean_2018.length;i++){
            fbs_2018_perc[i] = free_basic_services_clean_2017[i] / 400000*100
            fbs_2019_perc[i] = free_basic_services_clean_2018[i] / 400000*100
            fbs_2018_data = fbs_2018_perc
            fbs_2019_data = fbs_2019_perc
            this.setState({stepSize:50})
       }
      }
    }
      handleMultiChange(option) {
        this.setState({multiValue: option}); 
      
        water_supply_data = []
        basic_sanitation_data = []
        access_to_elec_data = []
        refuse_removal_data = []
        number_of_households_data = []
        let cYears = this.state.chartYears
      for(let item=0;item<cYears.length - 1;item++){
        water_supply_data.push([])
        basic_sanitation_data.push([])
        access_to_elec_data.push([])
        refuse_removal_data.push([])
        number_of_households_data.push([])
      }
      
        //Empty array so new data can be assigned

        free_basic_services_sortedNumber2 = [] 
        free_basic_services_sortedNumber3 = []  
        
        myData =[]

        //new 
        final_water_supply = []
        final_basic_sanitation = []
        final_access_elec = []
        final_refuse_removal = []
        final_num_of_household = []

        free_basic_services_clean_2017= []
        free_basic_services_clean_2018 = []

        option.map(function(item, i){
        
        myData.push(item.value);
        sortedData = myData.sort()
         
        if(sortedData.includes('BUF'))
          {
          //water_supply_data[year][index]  waterSupplyCollection[year][index]
          for(let index=0;index < cYears.length - 1;index++){
            water_supply_data[index][0] = waterSupplyCollection[index][0]
            basic_sanitation_data[index][0] = basicSanitationCollection[index][0]
            access_to_elec_data[index][0] = accessElecCollection[index][0]
            refuse_removal_data[index][0] = refuseRemovalCollection[index][0]
            number_of_households_data[index][0] = numOfHouseholdCollection[index][0]
          }
          
          free_basic_services_sortedNumber2[0] = free_basic_services_2018[0]
          free_basic_services_sortedNumber3[0] = free_basic_services_2019[0]
          
          }
        if(sortedData.includes('CCT'))
          {

          for(let index=0;index < cYears.length - 1;index++){
            water_supply_data[index][1] = waterSupplyCollection[index][1]
            basic_sanitation_data[index][1] = basicSanitationCollection[index][1]
            access_to_elec_data[index][1] = accessElecCollection[index][1]
            refuse_removal_data[index][1] = refuseRemovalCollection[index][1]
            number_of_households_data[index][1] = numOfHouseholdCollection[index][1]
          }
        
            free_basic_services_sortedNumber2[1] = free_basic_services_2018[1]
            free_basic_services_sortedNumber3[1] = free_basic_services_2019[1]
          }
        if(sortedData.includes('EKH'))
          {
          for(let index=0;index < cYears.length - 1;index++){
            water_supply_data[index][2] = waterSupplyCollection[index][2]
            basic_sanitation_data[index][2] = basicSanitationCollection[index][2]
            access_to_elec_data[index][2] = accessElecCollection[index][2]
            refuse_removal_data[index][2] = refuseRemovalCollection[index][2]
            number_of_households_data[index][2] = numOfHouseholdCollection[index][2]
          }

            free_basic_services_sortedNumber2[2] = free_basic_services_2018[2]
            free_basic_services_sortedNumber3[2] = free_basic_services_2019[2]
          }
        if(sortedData.includes('ETK'))
          {
          for(let index=0;index < cYears.length - 1;index++){
            water_supply_data[index][3] = waterSupplyCollection[index][3]
            basic_sanitation_data[index][3] = basicSanitationCollection[index][3]
            access_to_elec_data[index][3] = accessElecCollection[index][3]
            refuse_removal_data[index][3] = refuseRemovalCollection[index][3]
            number_of_households_data[index][3] = numOfHouseholdCollection[index][3]
          }

            free_basic_services_sortedNumber2[3] = free_basic_services_2018[3]
            free_basic_services_sortedNumber3[3] = free_basic_services_2019[3]
          }
        if(sortedData.includes('JHB'))
          {
          for(let index=0;index < cYears.length - 1;index++){
            water_supply_data[index][4] = waterSupplyCollection[index][4]
            basic_sanitation_data[index][4] = basicSanitationCollection[index][4]
            access_to_elec_data[index][4] = accessElecCollection[index][4]
            refuse_removal_data[index][4] = refuseRemovalCollection[index][4]
            number_of_households_data[index][4] = numOfHouseholdCollection[index][4]
          }

            free_basic_services_sortedNumber2[4] = free_basic_services_2018[4]
            free_basic_services_sortedNumber3[4] = free_basic_services_2019[4]
          }
        if(sortedData.includes('MAN'))
          {
           for(let index=0;index < cYears.length - 1;index++){
            water_supply_data[index][5] = waterSupplyCollection[index][5]
            basic_sanitation_data[index][5] = basicSanitationCollection[index][5]
            access_to_elec_data[index][5] = accessElecCollection[index][5]
            refuse_removal_data[index][5] = refuseRemovalCollection[index][5]
            number_of_households_data[index][5] = numOfHouseholdCollection[index][5]
          }

            free_basic_services_sortedNumber2[5] = free_basic_services_2018[5]
            free_basic_services_sortedNumber3[5] = free_basic_services_2019[5]
          }
        if(sortedData.includes('NMB'))
          {
          for(let index=0;index < cYears.length - 1;index++){
            water_supply_data[index][6] = waterSupplyCollection[index][6]
            basic_sanitation_data[index][6] = basicSanitationCollection[index][6]
            access_to_elec_data[index][6] = accessElecCollection[index][6]
            refuse_removal_data[index][6] = refuseRemovalCollection[index][6]
            number_of_households_data[index][6] = numOfHouseholdCollection[index][6]
          }

          free_basic_services_sortedNumber2[6] = free_basic_services_2018[6]
          free_basic_services_sortedNumber3[6] = free_basic_services_2019[6]
          }
        if(sortedData.includes('TSH'))
          {
          for(let index=0;index < cYears.length - 1;index++){
            water_supply_data[index][7] = waterSupplyCollection[index][7]
            basic_sanitation_data[index][7] = basicSanitationCollection[index][7]
            access_to_elec_data[index][7] = accessElecCollection[index][7]
            refuse_removal_data[index][7] = refuseRemovalCollection[index][7]
            number_of_households_data[index][7] = numOfHouseholdCollection[index][7]
          }
  
            free_basic_services_sortedNumber2[7] = free_basic_services_2018[7]
            free_basic_services_sortedNumber3[7] = free_basic_services_2019[7]
          }
 

          for(let index=0;index < cYears.length - 1;index++){
            final_water_supply[index]= water_supply_data[index].filter(Boolean)
            final_basic_sanitation[index]= basic_sanitation_data[index].filter(Boolean)
            final_access_elec[index]= access_to_elec_data[index].filter(Boolean)
            final_refuse_removal[index]= refuse_removal_data[index].filter(Boolean)
            final_num_of_household[index]= number_of_households_data[index].filter(Boolean)
          }
        
        free_basic_services_clean_2017 = free_basic_services_sortedNumber2.filter(Boolean);
        free_basic_services_clean_2018 = free_basic_services_sortedNumber3.filter(Boolean);

        }) 
      }

      renderChart_percentage_of_household_with_basic_water_supply(){
        let color = '#d6d6d6'
        let data = {
          labels:sortedData,
          datasets:[]
          }

          years.forEach(function(a,i) {
            switch(i) {
              case 0:
                color='#D0D1E6'
                break;
              case 1:
                color='#74A9CF'
                break;
              case 2:
                color='#0570B0'
                break;
              case 3:
                color='#023858'
                break;
              default:
                color='#d6d6d6'
            }
                data.datasets.push({
                label: a,
                stack: 'Stack '+i,
                data: final_water_supply[i],
                backgroundColor: color,
                borderColor: color,
              })
            })
          
        if(chartRef1){chartRef1.destroy();}
        var ctx = document.getElementById('mc').getContext('2d');
        chartRef1 = new Chart(ctx, {
            type: 'bar',
            data,
            options: {
              legend: {
                labels: {
                    fontColor: "#4A4A4A",
                    fontSize: 8,
                    fontFamily: "Montserrat",
                }
              },
              title: {
                  display: false,
                  text: 'Title',
                  fontFamily: "Montserrat",
              },
              tooltips: {
                  mode: 'index',
                  intercept: false,
                  callbacks: {
                      label: function (tooltipItem, data) {
                          var label = data.datasets[tooltipItem.datasetIndex].label || '';

                          if (label) {
                              label += ': ';
                          }
                          label += Math.round(tooltipItem.yLabel * 100) / 100;
                          return label;
                      }
                  }
              },
              responsive: true,
              scales: {
                  xAxes: [{
                      stacked: true,
                      ticks: {fontStyle: 'bold',steps:4,fontFamily: "Montserrat",},
                      gridLines: {
                        display:false,
                      }
                  }],
                  yAxes: [{
                      stacked: true,
                      ticks: {
                        stepSize:25,
                          callback: function (value, index, values) {
                              return Math.round(value * 100) / 100 + '  ';
                          },
                         
                      },
                      gridLines: {
                          drawTicks: false,
                      },
                      scaleLabel: {
                          display: true,
                          labelString: "Percent of Households",
                          fontStyle: 'bold',
                          fontFamily: "Montserrat",
                          fontSize: 12
                      }
                  }],

              }
           }
          });
      }
      renderChart_percentage_of_households_with_access_to_basic_sanitation(){
        let color = '#d6d6d6'
        let data = {
          labels:sortedData,
          datasets:[]
          }
            years.forEach(function(a,i) {
              switch(i) {
                case 0:
                  color='#D0D1E6'
                  break;
                case 1:
                  color='#74A9CF'
                  break;
                case 2:
                  color='#0570B0'
                  break;
                case 3:
                  color='#023858'
                  break;
                default:
                  color='#d6d6d6'
              }
                data.datasets.push({
                label: a,
                stack: 'Stack '+i,
                data: final_basic_sanitation[i],
                backgroundColor: color,
                borderColor: color,
              })
            })
          
        if(chartRef2){chartRef2.destroy();}
        var ctx = document.getElementById('mc1').getContext('2d');
        chartRef2 = new Chart(ctx, {
            type: 'bar',
            data,
            options: {
              legend: {
                labels: {
                    fontColor: "#4A4A4A",
                    fontSize: 8,
                    fontFamily: "Montserrat",
                }
              },
              title: {
                  display: false,
                  text: 'Title',
                  fontFamily: "Montserrat",
              },
              tooltips: {
                  mode: 'index',
                  intercept: false,
                  callbacks: {
                      label: function (tooltipItem, data) {
                          var label = data.datasets[tooltipItem.datasetIndex].label || '';

                          if (label) {
                              label += ': ';
                          }
                          label += Math.round(tooltipItem.yLabel * 100) / 100;
                          return label;
                      }
                  }
              },
              responsive: true,
              scales: {
                  xAxes: [{
                      stacked: true,
                      ticks: {fontStyle: 'bold',fontFamily: "Montserrat",},
                      gridLines: {
                        display:false,
                      }
                  }],
                  yAxes: [{
                      stacked: true,
                      ticks: {
                          stepSize:25,
                          callback: function (value, index, values) {
                              return Math.round(value * 100) / 100 + '  ';
                          }
                      },
                      gridLines: {
                          drawTicks: false,
                      },
                      scaleLabel: {
                          display: true,
                          labelString: "Percent of Households",
                          fontStyle: 'bold',
                          fontFamily: "Montserrat",
                          fontSize: 12
                      }
                  }],
              }
          }
          });
      }
      renderChart_percentage_of_households_with_access_to_electricity(){
        let color = '#d6d6d6'
        let data = {
          labels:sortedData,
          datasets:[]
          }
            years.forEach(function(a,i) {
              switch(i) {
                case 0:
                  color='#D0D1E6'
                  break;
                case 1:
                  color='#74A9CF'
                  break;
                case 2:
                  color='#0570B0'
                  break;
                case 3:
                  color='#023858'
                  break;
                default:
                  color='#d6d6d6'
              }
                data.datasets.push({
                label: a,
                stack: 'Stack '+i,
                data: final_access_elec[i],
                backgroundColor: color,
                borderColor: color,
              })
            })
        if(chartRef3){chartRef3.destroy();}
        var ctx = document.getElementById('mc2').getContext('2d');
        chartRef3 = new Chart(ctx, {
            type: 'bar',
            data,
            options: {
              legend: {
                labels: {
                    fontColor: "#4A4A4A",
                    fontSize: 8,
                    fontFamily: "Montserrat",
                }
              },
              title: {
                  display: false,
                  text: 'Title',
                  fontFamily: "Montserrat",
              },
              tooltips: {
                  mode: 'index',
                  intercept: false,
                  callbacks: {
                      label: function (tooltipItem, data) {
                          var label = data.datasets[tooltipItem.datasetIndex].label || '';

                          if (label) {
                              label += ': ';
                          }
                          label += Math.round(tooltipItem.yLabel * 100) / 100;
                          return label;
                      }
                  }
              },
              responsive: true,
              scales: {
                  xAxes: [{
                      stacked: true,
                      ticks: {fontStyle: 'bold',fontFamily: "Montserrat",},
                      gridLines: {
                        display:false,
                      }
                  }],
                  yAxes: [{
                      stacked: true,
                      ticks: {
                        stepSize:25,
                          callback: function (value, index, values) {
                              return Math.round(value * 100) / 100 + '  ';
                          }
                      },
                      gridLines: {
                          drawTicks: false,
                      },
                      scaleLabel: {
                          display: true,
                          labelString: "Percent of Households",
                          fontStyle: 'bold',
                          fontFamily: "Montserrat",
                          fontSize: 12
                      }
                  }],
              }
          }
          });
      }
      renderChart_total_number_of_households_in_the_municipality(){
        let color = '#d6d6d6'
        let data = {
          labels:sortedData,
          datasets:[]
          }
            years.forEach(function(a,i) {
              switch(i) {
                case 0:
                  color='#D0D1E6'
                  break;
                case 1:
                  color='#74A9CF'
                  break;
                case 2:
                  color='#0570B0'
                  break;
                case 3:
                  color='#023858'
                  break;
                default:
                  color='#d6d6d6'
              }
                data.datasets.push({
                label: a,
                stack: 'Stack '+i,
                data: final_refuse_removal[i],
                backgroundColor: color,
                borderColor: color,
              })
            })
        if(chartRef4){chartRef4.destroy();}
        var ctx = document.getElementById('mc3').getContext('2d');
        chartRef4 = new Chart(ctx, {
            type: 'bar',
            data,
            options: {
              legend: {
                labels: {
                    fontColor: "#4A4A4A",
                    fontSize: 8,
                    fontFamily: "Montserrat",
                }
              },
              title: {
                  display: false,
                  text: 'Title',
                  fontFamily: "Montserrat",
              },
              tooltips: {
                  mode: 'index',
                  intercept: false,
                  callbacks: {
                      label: function (tooltipItem, data) {
                          var label = data.datasets[tooltipItem.datasetIndex].label || '';

                          if (label) {
                              label += ': ';
                          }
                          label += Math.round(tooltipItem.yLabel * 100) / 100;
                          return label;
                      }
                  }
              },
              responsive: true,
              scales: {
                  xAxes: [{
                      stacked: true,
                      ticks: {fontStyle: 'bold',fontFamily: "Montserrat",},
                      gridLines: {
                        display:false,
                      }
                  }],
                  yAxes: [{
                      stacked: true,
                      ticks: {
                        stepSize:25,
                          callback: function (value, index, values) {
                              return Math.round(value * 100) / 100 + '  ';
                          }
                      },
                      gridLines: {
                          drawTicks: false,
                      },
                      scaleLabel: {
                          display: true,
                          labelString: "Percent of Households",
                          fontStyle: 'bold',
                          fontFamily: "Montserrat",
                          fontSize: 12
                      }
                  }],

              }
          }
          });
      }
      renderChart_percentage_households_with_weekly_municipal_refuse_removal(){
        let color = '#d6d6d6'
        let data = {
          labels:sortedData,
          datasets:[]
          }
            years.forEach(function(a,i) {
              switch(i) {
                case 0:
                  color='#D0D1E6'
                  break;
                case 1:
                  color='#74A9CF'
                  break;
                case 2:
                  color='#0570B0'
                  break;
                case 3:
                  color='#023858'
                  break;
                default:
                  color='#d6d6d6'
              }
                data.datasets.push({
                label: a,
                stack: 'Stack '+i,
                data: final_num_of_household[i],
                backgroundColor: color,
                borderColor: color,
              })
            })
        if(chartRef5){chartRef5.destroy();}
        var ctx = document.getElementById('mc4').getContext('2d');
        chartRef5 = new Chart(ctx, {
            type: 'bar',
            data,
            options: {
              legend: {
                labels: {
                    fontColor: "#4A4A4A",
                    fontSize: 8,
                    fontFamily: "Montserrat",
                }
              },
              title: {
                  display: false,
                  text: 'Title',
                  fontFamily: "Montserrat",
              },
              tooltips: {
                  mode: 'index',
                  intercept: false,
                  callbacks: {
                      label: function (tooltipItem, data) {
                          var label = data.datasets[tooltipItem.datasetIndex].label || '';
                          if (label) {
                              label += ': ';
                          }
                          label += Math.round(tooltipItem.yLabel * 100) / 100;
                          return label;
                      }
                  }
              },
              responsive: true,
              scales: {
                  xAxes: [{
                      stacked: true,
                      ticks: {fontStyle: 'bold',fontFamily: "Montserrat",},
                      gridLines: {
                        display:false,
                      }
                  }],
                  yAxes: [{
                      stacked: true,
                      ticks: {
                          stepSize: 500000,
                          callback: function (value, index, values) {
                              return Math.round(value * 100) / 100000 + 'k  ';
                          }
                      },
                      gridLines: {
                          drawTicks: false,
                      },
                      scaleLabel: {
                          display: true,
                          labelString: "No. of Households",
                          fontStyle: 'bold',
                          fontFamily: "Montserrat",
                          fontSize: 12
                      }
                  }],
              }
          }
          });
      }
      renderChart_free_basic_services(){
        if(chartRef6){chartRef6.destroy();}
        var ctx = document.getElementById('mc5').getContext('2d');

        chartRef6 = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: sortedData,
              datasets: [
                {
                  label: '2018',
                  stack: 'Stack 3',
                  data:fbs_2018_data,
                  backgroundColor: '#C8EBBA',
                  borderColor: '#C8EBBA',
                },
                {
                  label: '2019',
                  stack: 'Stack 4',
                  data: fbs_2019_data,
                  backgroundColor: '#5A8699',
                  borderColor: '#023858',
                }
          ]
            },
            options: {
              legend: {
                labels: {
                    fontColor: "#4A4A4A",
                    fontSize: 8,
                    fontFamily: "Montserrat",
                }
              },
              title: {
                  display: false,
                  text: 'Title',
                  fontFamily: "Montserrat",
              },
              tooltips: {
                  mode: 'index',
                  intercept: false,
                  callbacks: {
                      label: function (tooltipItem, data) {
                          var label = data.datasets[tooltipItem.datasetIndex].label || '';

                          if (label) {
                              label += ': ';
                          }
                          label += Math.round(tooltipItem.yLabel * 100) / 100;
                          {a ?  label = label+'%' : label}
                          return label;
                      }
                  }
              },
              responsive: true,
              scales: {
                  xAxes: [{
                      stacked: true,
                      ticks: {fontStyle: 'bold',fontFamily: "Montserrat",},
                      gridLines: {
                        display:false,
                      }
                  }],
                  
                  yAxes: [{
                      stacked: true,
                      ticks: {
                        stepSize:this.state.stepSize,
                          callback: function (value, index, values) {
                             {a? values = value + '%  ' : values = Math.round(value * 100) / 100000 + 'k'; }
                              return values
                          },                        
                      },
                      gridLines: {
                          drawTicks: false,
                      },
                      scaleLabel: {
                          display: true,
                          labelString: "No. of Domestic Units",
                          fontStyle: 'bold',
                          fontFamily: "Montserrat",
                          fontSize: 12
                      }
                  }],
              }
          }
          });
      }

    render(){

        return(
          <div >
      {this.state.loader ?
          <Modal id="loader" isOpen={this.state.loader} className="modal-dialog-centered loader">
              <ModalBody>
                  <div className="row">
                      <div className="col-2"></div>
                      <div className="col-0 ml-3 pt-4">
                          <Spinner type="grow" color="secondary" size="sm"/>
                          <Spinner type="grow" color="success" size="sm"/>
                          <Spinner type="grow" color="danger" size="sm"/>
                          <Spinner type="grow" color="warning" size="sm"/>
                      </div>
                      <div className="col-0 pt-4 pl-4 float-left">Loading Content...</div>
                  </div>
                  <br/>
              </ModalBody>
          </Modal>
          :''
          }
          <div  className='container-fluid charts_dashboards'>
            <div className='row'>
              <div className='charts_dashboards--left_container col-md-8 p-0'>
                <div className='charts_dashboards--select'>
                  <Select
                    id='multiple'
                    name="filters"
                    placeholder="Filter City"
                    value={this.state.multiValue}
                    options={this.state.filterOptions}
                    onChange={this.handleMultiChange}
                    isMulti={this.state.isMulti}
                    styles={style}
                  />
                </div>
                <div className='charts_dashboards--barcharts'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='charts'>
                        <div className='row'>
                          <div className='col-md-9'><h1 className='charts_dashboards--households'>Households: Access to Basic Water Supply</h1></div>
                          <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/392' target='_blank'/></div>
                        </div>
                        <canvas id='mc'></canvas>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='charts'>
                        <div className='row'>
                          <div className='col-md-9'><h1 className='charts_dashboards--households'>Households: Access to Basic Sanitation</h1></div>
                          <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/384' target='_blank'/></div>
                        </div>
                        <canvas id='mc1'></canvas>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='charts'>
                        <div className='row'>
                          <div className='col-md-9'><h1 className='charts_dashboards--households'>Households: Access to Electricity</h1></div>
                          <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/10' target='_blank'/></div>
                        </div>
                        <canvas id='mc2'></canvas>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='charts'>
                        <div className='row'>
                          <div className='col-md-9'><h1 className='charts_dashboards--households'>Households: Access to Refuse Removal</h1></div>
                          <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/1114' target='_blank' /></div>
                        </div>
                        <canvas id='mc3'></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='charts p-0'>
                  <div className='row'>
                    <div className='col-md-9'><h1 className='charts_dashboards--households'>Total Number of Households/Municipality</h1></div>
                    <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/12' target='_blank'/></div>
                  </div>
                  <canvas id='mc4'></canvas>
                </div>
                <div className='charts p-0 mt-4'>
                  <div className='row'>
                    <div className='col-md-9'><h1 className='charts_dashboards--households'>Units Receiving Free Basic Services</h1></div>
                    <div className='col-md-3 d-none'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook-explorer/384' target='_blank'/></div>
                  </div>
                  <Switch_text toggle={this.state.toggle} action={this.switchTrigger} />
                  <canvas id='mc5'></canvas>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    }
}