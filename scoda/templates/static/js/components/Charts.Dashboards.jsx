import React,{ Component } from 'react'
import Select from "react-select";
import Button from './Button';
import Switch_text from './Switch_text'

let a = true;
let test_2015 = [500000, 270876, 423603, 217790, 360005, 329838, 501687, 421451]
let test_2016 = [453145, 266876, 125603, 128790, 316005, 319838, 162387, 231151]
let test_2017 = [311445, 126876, 255603, 238790, 126005, 212738, 219687, 211151]
let test_2018 = [351445, 414176, 334103, 191690, 531715, 344738, 434112, 423112]

let water_supply2015 = [87.8,96.0,97.2,95.1,86.4,97.1,98.1,92.2]
let water_supply2016 = [87.6,95.1,97.5,96.6,89.4,95.4,96.2,92.0]
let water_supply2017 = [88.3,95.1,96.9,96.6,91.1,92.8,97.5,91.3]
let water_supply2018 = [84.5,95.9,97.1,96.4,91.8,86.4,97.7,91.3]

let basic_sani2015 =   [88.9,91.8,96.3,88.2,83.7,91.0,94.6,81.9]
let basic_sani2016 =   [90.4,92.0,94.8,89.2,83.3,87.8,92.9,82.5]
let basic_sani2017 =   [93.9,92.0,95.2,89.9,83.4,90.9,93.3,82.2]
let basic_sani2018 =   [93.1,92.4,96.0,90.6,83.6,89.3,97.1,83.7]

let access_to_elec2015 =[91.9,98.7,94.4,86.7,97.3,97.7,98.3,91.2]
let access_to_elec2016 =[90.6,98.4,94.1,90.0,97.4,97.7,97.6,92.2]
let access_to_elec2017 =[93.3,98.6,95.2,90.4,98.2,97.7,98.1,92.2]
let access_to_elec2018 =[91.6,98.6,96.1,92.2,98.2,98.0,98.6,93.3]

let refuse_removal2015 =[72.1,89.2,93.9,89.3,81.7,90.3,57.9,81.5]
let refuse_removal2016 =[67.2,89.6,94.3,88.7,82.3,88.6,84.3,81.3]
let refuse_removal2017 =[71.1,89.2,93.8,90.3,81.6,94.4,85.8,82.4]
let refuse_removal2018 =[69.1,89.7,91.9,89.9,81.4,77.3,88.3,82.0]

let free_basics2015 =[,,,,,,,]
let free_basics2016 =[,,,,,,,]
let free_basics2017 =[,,,,,,,]
let free_basics2018 =[,,,,,,,]

let numOfHousehold2015 =[229366,1133121,1646703,1124504,1071626,246861.2,329334.4,1009391]
let numOfHousehold2016 =[232814.5,1166911,1715315,1162696,1097550,251997.9,335398.9,1053314]
let numOfHousehold2017 =[236977.7,1200396,1780132,1199962,1128122,257466,342388.5,1094797]
let numOfHousehold2018 =[240877.5,1234317,1850035,1240058,1159272,262897.2,349257.2,1139488]


//chart declarations
var chartRef1,chartRef2,chartRef3,chartRef4,chartRef5,chartRef6

//City and year data
let sortedData = ["BUF", "CCT", "EKH", "ETK","JHB", "MAN", "NMB", "TSH"]

let water_supply_2015 = water_supply2015
let water_supply_2016 = water_supply2016
let water_supply_2017 = water_supply2017
let water_supply_2018 = water_supply2018

let basic_sanitation_2015 = basic_sani2015
let basic_sanitation_2016 = basic_sani2016
let basic_sanitation_2017= basic_sani2017
let basic_sanitation_2018 = basic_sani2018

let access_to_elec_2015 = access_to_elec2015
let access_to_elec_2016 = access_to_elec2016
let access_to_elec_2017= access_to_elec2017
let access_to_elec_2018 = access_to_elec2018

let access_to_refuse_2015 = refuse_removal2015
let access_to_refuse_2016 = refuse_removal2016
let access_to_refuse_2017= refuse_removal2017
let access_to_refuse_2018 = refuse_removal2018

//----
let  number_of_households_2015 = numOfHousehold2015
let  number_of_households_2016 = numOfHousehold2016
let  number_of_households_2017= numOfHousehold2017
let  number_of_households_2018 = numOfHousehold2018

let free_basic_services_2015 = test_2015
let free_basic_services_2016 = test_2016
let free_basic_services_2017= test_2017
let free_basic_services_2018 = test_2018


//cleaned data
let water_supply_clean_2015 = water_supply2015
let water_supply_clean_2016 = water_supply2016
let water_supply_clean_2017 = water_supply2017
let water_supply_clean_2018 = water_supply2018

let basic_sanitation_clean_2015 = basic_sani2015
let basic_sanitation_clean_2016 = basic_sani2016
let basic_sanitation_clean_2017 = basic_sani2017
let basic_sanitation_clean_2018 = basic_sani2018

let access_to_elec_clean_2015 = access_to_elec2015
let access_to_elec_clean_2016 = access_to_elec2016
let access_to_elec_clean_2017= access_to_elec2017
let access_to_elec_clean_2018 = access_to_elec2018

let access_to_refuse_clean_2015 = refuse_removal2015
let access_to_refuse_clean_2016 = refuse_removal2016
let access_to_refuse_clean_2017= refuse_removal2017
let access_to_refuse_clean_2018 = refuse_removal2018

//----
let  number_of_households_clean_2015 = numOfHousehold2015
let  number_of_households_clean_2016 = numOfHousehold2016
let  number_of_households_clean_2017= numOfHousehold2017
let  number_of_households_clean_2018 = numOfHousehold2018

let free_basic_services_clean_2015 = test_2015
let free_basic_services_clean_2016 = test_2016
let free_basic_services_clean_2017= test_2017
let free_basic_services_clean_2018 = test_2018

//loaded data onclick
let myData = [] 
//uncleaned - contains empty spaces
let sortedNumber = []
let sortedNumber1 = [] 
let sortedNumber2 = []
let sortedNumber3 = []  


let basic_sanitation_sortedNumber = []
let basic_sanitation_sortedNumber1= [] 
let basic_sanitation_sortedNumber2= []
let basic_sanitation_sortedNumber3= []  

let access_to_elec_sortedNumber = []
let access_to_elec_sortedNumber1= [] 
let access_to_elec_sortedNumber2= []
let access_to_elec_sortedNumber3= []  

let access_to_refuse_sortedNumber = []
let access_to_refuse_sortedNumber1= [] 
let access_to_refuse_sortedNumber2= []
let access_to_refuse_sortedNumber3= []  

//-------
let number_of_households_sortedNumber = []
let number_of_households_sortedNumber1= [] 
let number_of_households_sortedNumber2= []
let number_of_households_sortedNumber3= []  

let free_basic_services_sortedNumber = []
let free_basic_services_sortedNumber1= [] 
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
            isMulti:true,
            toggle: true,
          multiValue: [
            { value: "BUF", label: "BUF" },
            { value: "CCT", label: "CCT" },
            { value: "JHB", label: "JHB" },
            { value: "EKH", label: "EKH" },
            { value: "ETK", label: "ETK" },
            { value: "MAN", label: "MAN" },
            { value: "NMB", label: "NMB" },
            { value: "TSH", label: "TSH" }
          ],
          filterOptions: [
            { value: "BUF", label: "BUF" },
            { value: "CCT", label: "CCT" },
            { value: "JHB", label: "JHB" },
            { value: "EKH", label: "EKH" },
            { value: "ETK", label: "ETK" },
            { value: "MAN", label: "MAN" },
            { value: "NMB", label: "NMB" },
            { value: "TSH", label: "TSH" }
          ]
        };
    
        this.handleMultiChange = this.handleMultiChange.bind(this);
        this.switchTrigger = this.switchTrigger.bind(this);
      }
     switchTrigger(){
       this.setState({
         toggle: !this.state.toggle

       });
       if (!this.state.toggle) {
         a = false
       }
       else {
         a = true
       }
    }
      handleMultiChange(option) {
        this.setState({multiValue: option}); 
        console.log(this.state.multiValue)
        console.log('------BREAK------')
        console.log(this.state.filterOptions)
        sortedData =[]

        myData =[]

        sortedNumber  ,basic_sanitation_sortedNumber,  access_to_elec_sortedNumber,  access_to_refuse_sortedNumber, number_of_households_sortedNumber, free_basic_services_sortedNumber= []
        sortedNumber1 ,basic_sanitation_sortedNumber1, access_to_elec_sortedNumber1, access_to_refuse_sortedNumber1, number_of_households_sortedNumber1, free_basic_services_sortedNumber1 = [] 
        sortedNumber2 ,basic_sanitation_sortedNumber2, access_to_elec_sortedNumber2, access_to_refuse_sortedNumber2, number_of_households_sortedNumber2, free_basic_services_sortedNumber2 = [] ,
        sortedNumber3 ,basic_sanitation_sortedNumber3, access_to_elec_sortedNumber3, access_to_refuse_sortedNumber3, number_of_households_sortedNumber3, free_basic_services_sortedNumber3 = []  

        water_supply_clean_2015 =[]
        water_supply_clean_2016 =[]
        water_supply_clean_2017 =[]
        water_supply_clean_2018 =[]

        basic_sanitation_clean_2015 = []
        basic_sanitation_clean_2016 = []
        basic_sanitation_clean_2017 = []
        basic_sanitation_clean_2018 = []

        access_to_elec_clean_2015 = []
        access_to_elec_clean_2016 = []
        access_to_elec_clean_2017=  []
        access_to_elec_clean_2018 = []

        access_to_refuse_clean_2015 = []
        access_to_refuse_clean_2016 = []
        access_to_refuse_clean_2017= []
        access_to_refuse_clean_2018 = []

        number_of_households_clean_2015 = []
        number_of_households_clean_2016 = []
        number_of_households_clean_2017= []
        number_of_households_clean_2018 = []

        free_basic_services_clean_2015 = []
        free_basic_services_clean_2016 = []
        free_basic_services_clean_2017= []
        free_basic_services_clean_2018 = []

        option.map(function(item, i){
        
        myData.push(item.value);
        sortedData = myData.sort()

        if(sortedData.includes('BUF'))
          {
          sortedNumber[0] = water_supply_2015[0]
          sortedNumber1[0] = water_supply_2016[0]
          sortedNumber2[0] = water_supply_2017[0]
          sortedNumber3[0] = water_supply_2018[0]

          basic_sanitation_sortedNumber[0]  = basic_sanitation_2015[0]
          basic_sanitation_sortedNumber1[0] = basic_sanitation_2016[0]
          basic_sanitation_sortedNumber2[0] = basic_sanitation_2017[0]
          basic_sanitation_sortedNumber3[0] = basic_sanitation_2018[0]

          access_to_elec_sortedNumber[0]  = access_to_elec_2015[0]
          access_to_elec_sortedNumber1[0] = access_to_elec_2016[0]
          access_to_elec_sortedNumber2[0] = access_to_elec_2017[0]
          access_to_elec_sortedNumber3[0] = access_to_elec_2018[0]

          access_to_refuse_sortedNumber[0]  = access_to_refuse_2015[0]
          access_to_refuse_sortedNumber1[0] = access_to_refuse_2016[0]
          access_to_refuse_sortedNumber2[0] = access_to_refuse_2017[0]
          access_to_refuse_sortedNumber3[0] = access_to_refuse_2018[0]

          access_to_refuse_sortedNumber[0]  = access_to_refuse_2015[0]
          access_to_refuse_sortedNumber1[0] = access_to_refuse_2016[0]
          access_to_refuse_sortedNumber2[0] = access_to_refuse_2017[0]
          access_to_refuse_sortedNumber3[0] = access_to_refuse_2018[0]

          number_of_households_sortedNumber[0]  = number_of_households_2015[0]
          number_of_households_sortedNumber1[0] = number_of_households_2016[0]
          number_of_households_sortedNumber2[0] = number_of_households_2017[0]
          number_of_households_sortedNumber3[0] = number_of_households_2018[0]

          free_basic_services_sortedNumber[0]  = free_basic_services_2015[0]
          free_basic_services_sortedNumber1[0] = free_basic_services_2016[0]
          free_basic_services_sortedNumber2[0] = free_basic_services_2017[0]
          free_basic_services_sortedNumber3[0] = free_basic_services_2018[0]
          
          }
        if(sortedData.includes('CCT'))
          {
            sortedNumber[1] = water_supply_2015[1]
            sortedNumber1[1] = water_supply_2016[1]
            sortedNumber2[1] = water_supply_2017[1]
            sortedNumber3[1] = water_supply_2018[1]

            basic_sanitation_sortedNumber[1]  = basic_sanitation_2015[1]
            basic_sanitation_sortedNumber1[1] = basic_sanitation_2016[1]
            basic_sanitation_sortedNumber2[1] = basic_sanitation_2017[1]
            basic_sanitation_sortedNumber3[1] = basic_sanitation_2018[1]

            access_to_elec_sortedNumber[1]  = access_to_elec_2015[1]
            access_to_elec_sortedNumber1[1] = access_to_elec_2016[1]
            access_to_elec_sortedNumber2[1] = access_to_elec_2017[1]
            access_to_elec_sortedNumber3[1] = access_to_elec_2018[1]

            access_to_refuse_sortedNumber[1]  = access_to_refuse_2015[1]
            access_to_refuse_sortedNumber1[1] = access_to_refuse_2016[1]
            access_to_refuse_sortedNumber2[1] = access_to_refuse_2017[1]
            access_to_refuse_sortedNumber3[1] = access_to_refuse_2018[1]

            number_of_households_sortedNumber[1]  = number_of_households_2015[1]
            number_of_households_sortedNumber1[1] = number_of_households_2016[1]
            number_of_households_sortedNumber2[1] = number_of_households_2017[1]
            number_of_households_sortedNumber3[1] = number_of_households_2018[1]
  
            free_basic_services_sortedNumber[1]  = free_basic_services_2015[1]
            free_basic_services_sortedNumber1[1] = free_basic_services_2016[1]
            free_basic_services_sortedNumber2[1] = free_basic_services_2017[1]
            free_basic_services_sortedNumber3[1] = free_basic_services_2018[1]
          }
        if(sortedData.includes('EKH'))
          {
            sortedNumber[2] = water_supply_2015[2]
            sortedNumber1[2] = water_supply_2016[2]
            sortedNumber2[2] = water_supply_2017[2]
            sortedNumber3[2] = water_supply_2018[2]

            basic_sanitation_sortedNumber[2]  = basic_sanitation_2015[2]
            basic_sanitation_sortedNumber1[2] = basic_sanitation_2016[2]
            basic_sanitation_sortedNumber2[2] = basic_sanitation_2017[2]
            basic_sanitation_sortedNumber3[2] = basic_sanitation_2018[2]

            access_to_elec_sortedNumber[2]  = access_to_elec_2015[2]
            access_to_elec_sortedNumber1[2] = access_to_elec_2016[2]
            access_to_elec_sortedNumber2[2] = access_to_elec_2017[2]
            access_to_elec_sortedNumber3[2] = access_to_elec_2018[2]

            access_to_refuse_sortedNumber[2]  = access_to_refuse_2015[2]
            access_to_refuse_sortedNumber1[2] = access_to_refuse_2016[2]
            access_to_refuse_sortedNumber2[2] = access_to_refuse_2017[2]
            access_to_refuse_sortedNumber3[2] = access_to_refuse_2018[2]

            number_of_households_sortedNumber[2]  = number_of_households_2015[2]
            number_of_households_sortedNumber1[2] = number_of_households_2016[2]
            number_of_households_sortedNumber2[2] = number_of_households_2017[2]
            number_of_households_sortedNumber3[2] = number_of_households_2018[2]
  
            free_basic_services_sortedNumber[2]  = free_basic_services_2015[2]
            free_basic_services_sortedNumber1[2] = free_basic_services_2016[2]
            free_basic_services_sortedNumber2[2] = free_basic_services_2017[2]
            free_basic_services_sortedNumber3[2] = free_basic_services_2018[2]
          }
        if(sortedData.includes('ETK'))
          {
            sortedNumber[3] = water_supply_2015[3]
            sortedNumber1[3] = water_supply_2016[3]
            sortedNumber2[3] = water_supply_2017[3]
            sortedNumber3[3] = water_supply_2018[3]

            basic_sanitation_sortedNumber[3]  = basic_sanitation_2015[3]
            basic_sanitation_sortedNumber1[3] = basic_sanitation_2016[3]
            basic_sanitation_sortedNumber2[3] = basic_sanitation_2017[3]
            basic_sanitation_sortedNumber3[3] = basic_sanitation_2018[3]

            access_to_elec_sortedNumber[3]  = access_to_elec_2015[3]
            access_to_elec_sortedNumber1[3] = access_to_elec_2016[3]
            access_to_elec_sortedNumber2[3] = access_to_elec_2017[3]
            access_to_elec_sortedNumber3[3] = access_to_elec_2018[3]

            access_to_refuse_sortedNumber[3]  = access_to_refuse_2015[3]
            access_to_refuse_sortedNumber1[3] = access_to_refuse_2016[3]
            access_to_refuse_sortedNumber2[3] = access_to_refuse_2017[3]
            access_to_refuse_sortedNumber3[3] = access_to_refuse_2018[3]

            number_of_households_sortedNumber[3]  = number_of_households_2015[3]
            number_of_households_sortedNumber1[3] = number_of_households_2016[3]
            number_of_households_sortedNumber2[3] = number_of_households_2017[3]
            number_of_households_sortedNumber3[3] = number_of_households_2018[3]
  
            free_basic_services_sortedNumber[3]  = free_basic_services_2015[3]
            free_basic_services_sortedNumber1[3] = free_basic_services_2016[3]
            free_basic_services_sortedNumber2[3] = free_basic_services_2017[3]
            free_basic_services_sortedNumber3[3] = free_basic_services_2018[3]
          }
        if(sortedData.includes('JHB'))
          {
            sortedNumber[4] = water_supply_2015[4]
            sortedNumber1[4] = water_supply_2016[4]
            sortedNumber2[4] = water_supply_2017[4]
            sortedNumber3[4] = water_supply_2018[4]

            basic_sanitation_sortedNumber[4]  = basic_sanitation_2015[4]
            basic_sanitation_sortedNumber1[4] = basic_sanitation_2016[4]
            basic_sanitation_sortedNumber2[4] = basic_sanitation_2017[4]
            basic_sanitation_sortedNumber3[4] = basic_sanitation_2018[4]

            access_to_elec_sortedNumber[4]  = access_to_elec_2015[4]
            access_to_elec_sortedNumber1[4] = access_to_elec_2016[4]
            access_to_elec_sortedNumber2[4] = access_to_elec_2017[4]
            access_to_elec_sortedNumber3[4] = access_to_elec_2018[4]

            access_to_refuse_sortedNumber[4]  = access_to_refuse_2015[4]
            access_to_refuse_sortedNumber1[4] = access_to_refuse_2016[4]
            access_to_refuse_sortedNumber2[4] = access_to_refuse_2017[4]
            access_to_refuse_sortedNumber3[4] = access_to_refuse_2018[4]

            number_of_households_sortedNumber[4]  = number_of_households_2015[4]
            number_of_households_sortedNumber1[4] = number_of_households_2016[4]
            number_of_households_sortedNumber2[4] = number_of_households_2017[4]
            number_of_households_sortedNumber3[4] = number_of_households_2018[4]
  
            free_basic_services_sortedNumber[4]  = free_basic_services_2015[4]
            free_basic_services_sortedNumber1[4] = free_basic_services_2016[4]
            free_basic_services_sortedNumber2[4] = free_basic_services_2017[4]
            free_basic_services_sortedNumber3[4] = free_basic_services_2018[4]
          }
        if(sortedData.includes('MAN'))
          {
            sortedNumber[5] = water_supply_2015[5]
            sortedNumber1[5] = water_supply_2016[5]
            sortedNumber2[5] = water_supply_2017[5]
            sortedNumber3[5] = water_supply_2018[5]

            basic_sanitation_sortedNumber[5]  = basic_sanitation_2015[5]
            basic_sanitation_sortedNumber1[5] = basic_sanitation_2016[5]
            basic_sanitation_sortedNumber2[5] = basic_sanitation_2017[5]
            basic_sanitation_sortedNumber3[5] = basic_sanitation_2018[5]

            access_to_elec_sortedNumber[5]  = access_to_elec_2015[5]
            access_to_elec_sortedNumber1[5] = access_to_elec_2016[5]
            access_to_elec_sortedNumber2[5] = access_to_elec_2017[5]
            access_to_elec_sortedNumber3[5] = access_to_elec_2018[5]

            access_to_refuse_sortedNumber[5]  = access_to_refuse_2015[5]
            access_to_refuse_sortedNumber1[5] = access_to_refuse_2016[5]
            access_to_refuse_sortedNumber2[5] = access_to_refuse_2017[5]
            access_to_refuse_sortedNumber3[5] = access_to_refuse_2018[5]

            number_of_households_sortedNumber[5]  = number_of_households_2015[5]
            number_of_households_sortedNumber1[5] = number_of_households_2016[5]
            number_of_households_sortedNumber2[5] = number_of_households_2017[5]
            number_of_households_sortedNumber3[5] = number_of_households_2018[5]
  
            free_basic_services_sortedNumber[5]  = free_basic_services_2015[5]
            free_basic_services_sortedNumber1[5] = free_basic_services_2016[5]
            free_basic_services_sortedNumber2[5] = free_basic_services_2017[5]
            free_basic_services_sortedNumber3[5] = free_basic_services_2018[5]
          }
        if(sortedData.includes('NMB'))
          {
          sortedNumber[6] = water_supply_2015[6]
          sortedNumber1[6] = water_supply_2016[6]
          sortedNumber2[6] = water_supply_2017[6]
          sortedNumber3[6] = water_supply_2018[6]

          basic_sanitation_sortedNumber[6]  = basic_sanitation_2015[6]
          basic_sanitation_sortedNumber1[6] = basic_sanitation_2016[6]
          basic_sanitation_sortedNumber2[6] = basic_sanitation_2017[6]
          basic_sanitation_sortedNumber3[6] = basic_sanitation_2018[6]

          
          access_to_elec_sortedNumber[6]  = access_to_elec_2015[6]
          access_to_elec_sortedNumber1[6] = access_to_elec_2016[6]
          access_to_elec_sortedNumber2[6] = access_to_elec_2017[6]
          access_to_elec_sortedNumber3[6] = access_to_elec_2018[6]

          access_to_refuse_sortedNumber[6]  = access_to_refuse_2015[6]
          access_to_refuse_sortedNumber1[6] = access_to_refuse_2016[6]
          access_to_refuse_sortedNumber2[6] = access_to_refuse_2017[6]
          access_to_refuse_sortedNumber3[6] = access_to_refuse_2018[6]

          number_of_households_sortedNumber[6]  = number_of_households_2015[6]
          number_of_households_sortedNumber1[6] = number_of_households_2016[6]
          number_of_households_sortedNumber2[6] = number_of_households_2017[6]
          number_of_households_sortedNumber3[6] = number_of_households_2018[6]

          free_basic_services_sortedNumber[6]  = free_basic_services_2015[6]
          free_basic_services_sortedNumber1[6] = free_basic_services_2016[6]
          free_basic_services_sortedNumber2[6] = free_basic_services_2017[6]
          free_basic_services_sortedNumber3[6] = free_basic_services_2018[6]
          }
        if(sortedData.includes('TSH'))
          {
            sortedNumber[7] = water_supply_2015[7]
            sortedNumber1[7] = water_supply_2016[7]
            sortedNumber2[7] = water_supply_2017[7]
            sortedNumber3[7] = water_supply_2018[7]

            basic_sanitation_sortedNumber[7]  = basic_sanitation_2015[7]
            basic_sanitation_sortedNumber1[7] = basic_sanitation_2016[7]
            basic_sanitation_sortedNumber2[7] = basic_sanitation_2017[7]
            basic_sanitation_sortedNumber3[7] = basic_sanitation_2018[7]

            access_to_elec_sortedNumber[7]  = access_to_elec_2015[7]
            access_to_elec_sortedNumber1[7] = access_to_elec_2016[7]
            access_to_elec_sortedNumber2[7] = access_to_elec_2017[7]
            access_to_elec_sortedNumber3[7] = access_to_elec_2018[7]

            access_to_refuse_sortedNumber[7]  = access_to_refuse_2015[7]
            access_to_refuse_sortedNumber1[7] = access_to_refuse_2016[7]
            access_to_refuse_sortedNumber2[7] = access_to_refuse_2017[7]
            access_to_refuse_sortedNumber3[7] = access_to_refuse_2018[7]

            number_of_households_sortedNumber[7]  = number_of_households_2015[7]
            number_of_households_sortedNumber1[7] = number_of_households_2016[7]
            number_of_households_sortedNumber2[7] = number_of_households_2017[7]
            number_of_households_sortedNumber3[7] = number_of_households_2018[7]
  
            free_basic_services_sortedNumber[7]  = free_basic_services_2015[7]
            free_basic_services_sortedNumber1[7] = free_basic_services_2016[7]
            free_basic_services_sortedNumber2[7] = free_basic_services_2017[7]
            free_basic_services_sortedNumber3[7] = free_basic_services_2018[7]
          }
        
        water_supply_clean_2015 = sortedNumber.filter(Boolean);
        water_supply_clean_2016 = sortedNumber1.filter(Boolean);
        water_supply_clean_2017 = sortedNumber2.filter(Boolean);
        water_supply_clean_2018 = sortedNumber3.filter(Boolean);

        basic_sanitation_clean_2015 = basic_sanitation_sortedNumber.filter(Boolean);
        basic_sanitation_clean_2016 = basic_sanitation_sortedNumber1.filter(Boolean);
        basic_sanitation_clean_2017 = basic_sanitation_sortedNumber2.filter(Boolean);
        basic_sanitation_clean_2018 = basic_sanitation_sortedNumber3.filter(Boolean);

        access_to_elec_clean_2015 = access_to_elec_sortedNumber.filter(Boolean);
        access_to_elec_clean_2016 = access_to_elec_sortedNumber1.filter(Boolean);
        access_to_elec_clean_2017 = access_to_elec_sortedNumber2.filter(Boolean);
        access_to_elec_clean_2018 = access_to_elec_sortedNumber3.filter(Boolean);

        access_to_refuse_clean_2015 = access_to_refuse_sortedNumber.filter(Boolean);
        access_to_refuse_clean_2016 = access_to_refuse_sortedNumber1.filter(Boolean);
        access_to_refuse_clean_2017 = access_to_refuse_sortedNumber2.filter(Boolean);
        access_to_refuse_clean_2018 = access_to_refuse_sortedNumber3.filter(Boolean);

        number_of_households_clean_2015 = number_of_households_sortedNumber.filter(Boolean);
        number_of_households_clean_2016 = number_of_households_sortedNumber1.filter(Boolean);
        number_of_households_clean_2017 = number_of_households_sortedNumber2.filter(Boolean);
        number_of_households_clean_2018 = number_of_households_sortedNumber3.filter(Boolean);
        
        free_basic_services_clean_2015 = free_basic_services_sortedNumber.filter(Boolean);
        free_basic_services_clean_2016 = free_basic_services_sortedNumber1.filter(Boolean);
        free_basic_services_clean_2017 = free_basic_services_sortedNumber2.filter(Boolean);
        free_basic_services_clean_2018 = free_basic_services_sortedNumber3.filter(Boolean);

 

        }) 
      }
      renderChart(){
        if(chartRef1){chartRef1.destroy();}
        var ctx = document.getElementById('mc').getContext('2d');

        chartRef1 = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: sortedData,
              datasets: [
                {
                label: '2015',
                stack: 'Stack 1',
                data: water_supply_clean_2015,
                backgroundColor: [
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                ],
                borderColor: [
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                ]
                },
                  {
                  label: '2016',
                  stack: 'Stack 2',
                  data: water_supply_clean_2016,
                  backgroundColor: [
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',

                  ],
                  borderColor: [
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                  ]
                },
                {
                  label: '2017',
                  stack: 'Stack 3',
                  data: water_supply_clean_2017,
                  backgroundColor: [
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                  ],
                  borderColor: [
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                  ]
                },
                {
                  label: '2018',
                  stack: 'Stack 4',
                  data: water_supply_clean_2018,
                  backgroundColor: [
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',

                  ],
                  borderColor: [
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',

                  ]
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
      renderChart1(){
        if(chartRef2){chartRef2.destroy();}

        var ctx = document.getElementById('mc1').getContext('2d');

        chartRef2 = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: sortedData,
              datasets: [{
                label: '2015',
                stack: 'Stack 1',
                data: basic_sanitation_clean_2015,
                backgroundColor: [
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                ],
                borderColor: [
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                ]
              },
                  {
                  label: '2016',
                  stack: 'Stack 2',
                  data: basic_sanitation_clean_2016,
                  backgroundColor: [
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',

                  ],
                  borderColor: [
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                  ]
                },
                {
                  label: '2017',
                  stack: 'Stack 3',
                  data: basic_sanitation_clean_2017,
                  backgroundColor: [
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                  ],
                  borderColor: [
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                  ]
                },
                {
                  label: '2018',
                  stack: 'Stack 4',
                  data: basic_sanitation_clean_2018,
                  backgroundColor: [
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',

                  ],
                  borderColor: [
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',

                  ]
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
      renderChart2(){
        if(chartRef3){chartRef3.destroy();}
        var ctx = document.getElementById('mc2').getContext('2d');

        chartRef3 = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: sortedData,
              datasets: [{
                label: '2015',
                stack: 'Stack 1',
                data: access_to_elec_clean_2015,
                backgroundColor: [
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                ],
                borderColor: [
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                ]
              },
                  {
                  label: '2016',
                  stack: 'Stack 2',
                  data: access_to_elec_clean_2016,
                  backgroundColor: [
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',

                  ],
                  borderColor: [
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                  ]
                },
                {
                  label: '2017',
                  stack: 'Stack 3',
                  data: access_to_elec_clean_2017,
                  backgroundColor: [
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                  ],
                  borderColor: [
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                  ]
                },
                {
                  label: '2018',
                  stack: 'Stack 4',
                  data: access_to_elec_clean_2018,
                  backgroundColor: [
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',

                  ],
                  borderColor: [
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',

                  ]
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
      renderChart3(){
        if(chartRef4){chartRef4.destroy();}
        var ctx = document.getElementById('mc3').getContext('2d');

        chartRef4 = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: sortedData,
              datasets: [{
                label: '2015',
                stack: 'Stack 1',
                data: access_to_refuse_clean_2015,
                backgroundColor: [
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                ],
                borderColor: [
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                ]
              },
                  {
                  label: '2016',
                  stack: 'Stack 2',
                  data: access_to_refuse_clean_2016,
                  backgroundColor: [
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',

                  ],
                  borderColor: [
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                  ]
                },
                {
                  label: '2017',
                  stack: 'Stack 3',
                  data: access_to_refuse_clean_2017,
                  backgroundColor: [
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                  ],
                  borderColor: [
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                  ]
                },
                {
                  label: '2018',
                  stack: 'Stack 4',
                  data: access_to_refuse_clean_2018,
                  backgroundColor: [
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',

                  ],
                  borderColor: [
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',

                  ]
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
      renderChart4(){
        if(chartRef5){chartRef5.destroy();}
        var ctx = document.getElementById('mc4').getContext('2d');

        chartRef5 = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: sortedData,
              datasets: [{
                label: '2015',
                stack: 'Stack 1',
                data: number_of_households_clean_2015,
                backgroundColor: [
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                ],
                borderColor: [
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                    '#D0D1E6',
                ]
              },
                  {
                  label: '2016',
                  stack: 'Stack 2',
                  data: number_of_households_clean_2016,
                  backgroundColor: [
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',

                  ],
                  borderColor: [
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                    '#74A9CF',
                  ]
                },
                {
                  label: '2017',
                  stack: 'Stack 3',
                  data: number_of_households_clean_2017,
                  backgroundColor: [
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                  ],
                  borderColor: [
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                    '#0570B0',
                  ]
                },
                {
                  label: '2018',
                  stack: 'Stack 4',
                  data: number_of_households_clean_2018,
                  backgroundColor: [
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',

                  ],
                  borderColor: [
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',

                  ]
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
      renderChart5(){
        if(chartRef6){chartRef6.destroy();}
        var ctx = document.getElementById('mc5').getContext('2d');

        chartRef6 = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: sortedData,
              datasets: [{
                label: 'Free basic electricity',
                stack: 'Stack 1',
                data: free_basic_services_clean_2015,
                backgroundColor: [
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                ],
                borderColor: [
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                    '#FFCA81',
                ]
              },
                  {
                  label: 'Free basic sewerage & sanitation',
                  stack: 'Stack 2',
                  data: free_basic_services_clean_2016,
                  backgroundColor: [
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',

                  ],
                  borderColor: [
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',
                    '#C4500C',
                  ]
                },
                {
                  label: 'Free basic solid waste management',
                  stack: 'Stack 3',
                  data: free_basic_services_clean_2017,
                  backgroundColor: [
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                  ],
                  borderColor: [
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                    '#C8EBBA',
                  ]
                },
                {
                  label: 'Free basic water',
                  stack: 'Stack 4',
                  data: free_basic_services_clean_2018,
                  backgroundColor: [
                    '#5A8699',
                    '#5A8699',
                    '#5A8699',
                    '#5A8699',
                    '#5A8699',
                    '#5A8699',
                    '#5A8699',
                    '#5A8699',

                  ],
                  borderColor: [
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',
                    '#023858',

                  ]
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
                        stepSize:200000,
                          callback: function (value, index, values) {
                             {a? values = Math.round(value / 400000) * 100 + ' %' : values = Math.round(value * 100) / 100000 + 'k'; }
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
      componentDidMount(){
        window.onload = function(){
          document.getElementById('optionTwo').click();
        }
        this.renderChart();
        this.renderChart1();
        this.renderChart2();
        this.renderChart3();
        this.renderChart4();
        this.renderChart5();
      }
      componentDidUpdate(){
        this.renderChart();
        this.renderChart1();
        this.renderChart2();
        this.renderChart3();
        this.renderChart4();
        this.renderChart5();
      }

    
    render(){
        return(
          <div >
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
                          <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook' target='_blank'/></div>
                        </div>
                        <canvas id='mc'></canvas>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='charts'>
                        <div className='row'>
                          <div className='col-md-9'><h1 className='charts_dashboards--households'>Households: Access to Basic Sanitation</h1></div>
                          <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook' target='_blank'/></div>
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
                          <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook' target='_blank'/></div>
                        </div>
                        <canvas id='mc2'></canvas>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='charts'>
                        <div className='row'>
                          <div className='col-md-9'><h1 className='charts_dashboards--households'>Households: Access to Refuse Removal</h1></div>
                          <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook' target='_blank' /></div>
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
                    <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook' target='_blank'/></div>
                  </div>
                  <canvas id='mc4'></canvas>
                </div>
                <div className='charts p-0 mt-4'>
                  <div className='row'>
                    <div className='col-md-9'><h1 className='charts_dashboards--households'>Units Receiving Free Basic Services</h1></div>
                    <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='/#/codebook' target='_blank'/></div>
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