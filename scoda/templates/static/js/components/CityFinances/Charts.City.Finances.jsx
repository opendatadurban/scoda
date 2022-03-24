import React, { useRef, useEffect, useState } from 'react'
import Select from "react-select";
import Button from '../Button';
import { Modal, ModalBody, Spinner } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import BarChart from '../Barchart'
import HumanResourcesData from '../../data/HumanResourceData'

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.
// let fbs_data_2018 = [76201, 320406, 15848, 237330, 174687, 29658, 73593, 57250]

let wasteful_expenditure = []
let wasteful_expenditure_data = []
let wasteful_expenditure_clean = []
let final_wasteful_expenditure = []
let WastefulExpenditureCollection = [];

let irregular_expenditure = []
let irregular_expenditure_data = []
let irregular_expenditure_clean = []
let final_irregular_expenditure = []
let IrregularExpenditureCollection = [];

let fruitless_expenditure = []
let fruitless_expenditure_data = []
let fruitless_expenditure_clean = []
let final_fruitless_expenditure = []
let FruitlessExpenditureCollection = [];

let unauthorised_expenditure = []
let unauthorised_expenditure_data = []
let unauthorised_expenditure_clean = []
let final_unauthorised_expenditure = []
let UnauthorisedExpenditureCollection = [];

//Testing data

let unauthorised_irre_expend = [
  [0.2, 0.5, 0.5, 0.8, 0.1, 0.6, 0.9, 0.3], //2014
  [1.3, 1.6, 1.4, 1.1, 1.7, 1.4, 3, 1.4],//2015
  [1, 1, 2, 3, 4, 3, 4, 1],//2016
  [7, 5, 3, 5, 8, 8, 5, 4],//2017
]
let irre_expend = [
  [2, 0, 0, 8, 2, 1, 1, 0], //2014
  [2, 2, 3, 3, 4, 2, 2, 0],//2015
  [2, 1, 9, 4, 4, 2, 2, 4],//2016
  [1, 0, 14, 6, 2, 11, 0, 2],//2017
]

let fruitless_w_expend = [
  [0.2, 0.5, 0.5, 0.8, 0.1, 0.6, 0.9, 0.3], //2014
  [0.3, 0.6, 0.4, 0.1, 1.1, 0.4, 0.3, 0.4],//2015
  [1, 1, 0.1, 0.3, 1.4, 0.3, 1.4, 0],//2016
  [0, 0.5, 0.5, 1.0, 0.0, 0.0, 0.5, 0.4],//2017
]
let unauthorised_expend = [
  [0.2, 0.5, 0.5, 0.8, 0.1, 0.6, 0.9, 0.3], //2014
  [1.3, 1.6, 1.4, 1.1, 1.7, 1.4, 0.3, 1.4],//2015
  [1, 1, 2, 0.3, 1.4, 0.3, 1.4, 1],//2016
  [2, 0.5, 1.5, 1.7, 0.6, 0.8, 0.5, 1.4],//2017
]
let data_waste_exp = {
  labels: sortedData,
  datasets: []
}
let irregular_expend = {
  labels: sortedData,
  datasets: []
}
let data_fruit_expend = {
  labels: sortedData,
  datasets: []
}
let data_unauth_expend = {
  labels: sortedData,
  datasets: []
}
//chart declarations
var chartRef1,chartRef2,chartRef3,chartRef4

//City and year data
let sortedData = ["BUF", "CCT", "EKH", "ETK", "JHB", "MAN", "NMB", "TSH"]

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.

let myData = []

//Units Receiving Free Basic Services data , static for now since it's still not part of codebook.

const style = {
  control: (base, state) => ({
    ...base,
    border: '1px solid #4A4A4A',
    borderRadius: '28px',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #4A4A4A',
      borderRadius: '28px',
    }
  })
};

const CitizenEngagmentes = () => {

  const mounted = useRef();
  // let [final_wasteful_expenditure, setFinal_wasteful_expenditure] = useState([])
  const [stepSize, setStepSize] = useState(200000);
  const [waste_exp, setWaste_exp] = useState();
  const [fruit_ex, setFruit_ex] = useState();
  const [irreg_expend, setIrre_expend] = useState();
  const [unauth_exp, setUnauth_exp] = useState();
  const [isMulti, setIsMulti] = useState(true);
  const [loader, setLoader] = useState(false);
  const [chartYears, setChartYears] = useState(['Year', '2014', '2015', '2016', '2017']);
  const [noYears, setNoYears] = useState(['2014', '2015', '2016', '2017']);
  const [noYears1, setNoYears1] = useState(['2000', '2006', '2011', '2016']);
  const [pie, setPie] = useState(['a']);
  const [data,setData] = useState(HumanResourcesData)
  const [multiValue, setMultiValue] = useState([
    { value: "BUF", label: "BUF" },
    { value: "CCT", label: "CCT" },
    { value: "JHB", label: "JHB" },
    { value: "EKH", label: "EKH" },
    { value: "ETK", label: "ETK" },
    { value: "MAN", label: "MAN" },
    { value: "NMB", label: "NMB" },
    { value: "TSH", label: "TSH" }
  ]);
  const [filterOptions, setfilterOptions] = useState([
    { value: "BUF", label: "BUF" },
    { value: "CCT", label: "CCT" },
    { value: "JHB", label: "JHB" },
    { value: "EKH", label: "EKH" },
    { value: "ETK", label: "ETK" },
    { value: "MAN", label: "MAN" },
    { value: "NMB", label: "NMB" },
    { value: "TSH", label: "TSH" }
  ]);

  useEffect(() => {
    console.log(data)
    if (!mounted.current) {
      //equivilent to componentdidmount
      func_wasteful_expenditure();
      func_irregular_expenditure();
      func_fruitless_expenditure();
      func_unauthorised_expenditure();

      renderChart_wasteful_expenditure();
      renderChart_irregular_expenditure();
      renderChart_fruitless_expenditure();
      renderChart_unauthorised_expenditure();
      mounted.current = true;
    }
    else {
      //equivilent to componentdidupdate
      renderChart_wasteful_expenditure();
      renderChart_irregular_expenditure();
      renderChart_fruitless_expenditure();
      renderChart_unauthorised_expenditure();
    }
  },[]);
  const func_wasteful_expenditure = () => {
    let toNum = new Object()
    let years = 2020
    let startingYear = 2015

    let count = 0
    for (let i = 0; i < 5; i++) {
      for (let k = 0; k < 1; k++) {
        if (i === 0) { }
        else { toNum[2014 + i] = i }
      }
    }
    for (let year = startingYear; year < years; year++) {
      WastefulExpenditureCollection.push(unauthorised_irre_expend[toNum[year] - 1]);
      wasteful_expenditure.push(WastefulExpenditureCollection[count])
      wasteful_expenditure_clean.push(wasteful_expenditure)
      count++
    }
    final_wasteful_expenditure = wasteful_expenditure_clean[0]
  }
  const func_irregular_expenditure = () => {
    let toNum = new Object()
    let years = 2020
    let startingYear = 2015

    let count = 0
    for (let i = 0; i < 5; i++) {
      for (let k = 0; k < 1; k++) {
        if (i === 0) { }
        else { toNum[2014 + i] = i }
      }
    }
    for (let year = startingYear; year < years; year++) {
      IrregularExpenditureCollection.push(irre_expend[toNum[year] - 1]);
      irregular_expenditure.push(IrregularExpenditureCollection[count])
      irregular_expenditure_clean.push(irregular_expenditure)
      count++
    }
    final_irregular_expenditure = irregular_expenditure_clean[0]
  }
  const func_fruitless_expenditure = () => {
    let toNum = new Object()
    let years = 2020
    let startingYear = 2015

    let count = 0
    for (let i = 0; i < 5; i++) {
      for (let k = 0; k < 1; k++) {
        if (i === 0) { }
        else { toNum[2014 + i] = i }
      }
    }
    for (let year = startingYear; year < years; year++) {
      FruitlessExpenditureCollection.push(fruitless_w_expend[toNum[year] - 1]);
      fruitless_expenditure.push(FruitlessExpenditureCollection[count])
      fruitless_expenditure_clean.push(fruitless_expenditure)
      count++
    }
    final_fruitless_expenditure = fruitless_expenditure_clean[0]
  }
  const func_unauthorised_expenditure = () => {
    let toNum = new Object()
    let years = 2020
    let startingYear = 2015

    let count = 0
    for (let i = 0; i < 5; i++) {
      for (let k = 0; k < 1; k++) {
        if (i === 0) { }
        else { toNum[2014 + i] = i }
      }
    }
    for (let year = startingYear; year < years; year++) {
      UnauthorisedExpenditureCollection.push(unauthorised_expend[toNum[year] - 1]);
      unauthorised_expenditure.push(UnauthorisedExpenditureCollection[count])
      unauthorised_expenditure_clean.push(unauthorised_expenditure)
      count++
    }
    final_unauthorised_expenditure = unauthorised_expenditure_clean[0]
  }

  const handleMultiChange = (option) => {
    setMultiValue(option)

    wasteful_expenditure_data = []
    irregular_expenditure_data = []
    fruitless_expenditure_data = []
    unauthorised_expenditure_data = []

    let cYears = chartYears
    for (let item = 0; item < cYears.length - 1; item++) {
      wasteful_expenditure_data.push([])
      irregular_expenditure_data.push([])
      fruitless_expenditure_data.push([])
      unauthorised_expenditure_data.push([])
    }

    //Empty array so new data can be assigned
    myData = []

    //new 
    final_wasteful_expenditure = []
    final_irregular_expenditure = []
    final_fruitless_expenditure = []
    final_unauthorised_expenditure = []


    option.map(function (item, i) {

      myData.push(item.value);

      sortedData = myData.sort()
      if (sortedData.includes('BUF')) {
        //wasteful_expenditure_data[year][index]  WastefulExpenditureCollection[year][index]
        for (let index = 0; index < cYears.length - 1; index++) {

          wasteful_expenditure_data[index][0] = WastefulExpenditureCollection[index][0]
          irregular_expenditure_data[index][0] = IrregularExpenditureCollection[index][0]
          fruitless_expenditure_data[index][0] = FruitlessExpenditureCollection[index][0]
          unauthorised_expenditure_data[index][0] = UnauthorisedExpenditureCollection[index][0]
        }

      }
      if (sortedData.includes('CCT')) {

        for (let index = 0; index < cYears.length - 1; index++) {
          wasteful_expenditure_data[index][1] = WastefulExpenditureCollection[index][1]
          irregular_expenditure_data[index][1] = IrregularExpenditureCollection[index][1]
          fruitless_expenditure_data[index][1] = FruitlessExpenditureCollection[index][1]
          unauthorised_expenditure_data[index][1] = UnauthorisedExpenditureCollection[index][1]
        }

      }
      if (sortedData.includes('EKH')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          wasteful_expenditure_data[index][2] = WastefulExpenditureCollection[index][2]
          irregular_expenditure_data[index][2] = IrregularExpenditureCollection[index][2]
          fruitless_expenditure_data[index][2] = FruitlessExpenditureCollection[index][2]
          unauthorised_expenditure_data[index][2] = UnauthorisedExpenditureCollection[index][2]
        }
      }
      if (sortedData.includes('ETK')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          wasteful_expenditure_data[index][3] = WastefulExpenditureCollection[index][3]
          irregular_expenditure_data[index][3] = IrregularExpenditureCollection[index][3]
          fruitless_expenditure_data[index][3] = FruitlessExpenditureCollection[index][3]
          unauthorised_expenditure_data[index][3] = UnauthorisedExpenditureCollection[index][3]
        }
      }
      if (sortedData.includes('JHB')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          wasteful_expenditure_data[index][4] = WastefulExpenditureCollection[index][4]
          irregular_expenditure_data[index][4] = IrregularExpenditureCollection[index][4]
          fruitless_expenditure_data[index][4] = FruitlessExpenditureCollection[index][4]
          unauthorised_expenditure_data[index][4] = UnauthorisedExpenditureCollection[index][4]
        }
      }
      if (sortedData.includes('MAN')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          wasteful_expenditure_data[index][5] = WastefulExpenditureCollection[index][5]
          irregular_expenditure_data[index][5] = IrregularExpenditureCollection[index][5]
          fruitless_expenditure_data[index][5] = FruitlessExpenditureCollection[index][5]
          unauthorised_expenditure_data[index][5] = UnauthorisedExpenditureCollection[index][5]
        }
      }
      if (sortedData.includes('NMB')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          wasteful_expenditure_data[index][6] = WastefulExpenditureCollection[index][6]
          irregular_expenditure_data[index][6] = IrregularExpenditureCollection[index][6]
          fruitless_expenditure_data[index][6] = FruitlessExpenditureCollection[index][6]
          unauthorised_expenditure_data[index][6] = UnauthorisedExpenditureCollection[index][6]

        }
      }
      if (sortedData.includes('TSH')) {
        for (let index = 0; index < cYears.length - 1; index++) {
          wasteful_expenditure_data[index][7] = WastefulExpenditureCollection[index][7]
          irregular_expenditure_data[index][7] = IrregularExpenditureCollection[index][7]
          fruitless_expenditure_data[index][7] = FruitlessExpenditureCollection[index][7]
          unauthorised_expenditure_data[index][7] = UnauthorisedExpenditureCollection[index][7]
        }
      }

      for (let index = 0; index < cYears.length - 1; index++) {
        final_wasteful_expenditure[index] = wasteful_expenditure_data[index].filter(Boolean)
        final_irregular_expenditure[index] = irregular_expenditure_data[index].filter(Boolean)
        final_fruitless_expenditure[index] = fruitless_expenditure_data[index].filter(Boolean)
        final_unauthorised_expenditure[index] = unauthorised_expenditure_data[index].filter(Boolean)
      }
      renderChart_wasteful_expenditure();
      renderChart_irregular_expenditure();
      renderChart_fruitless_expenditure();
      renderChart_unauthorised_expenditure();

    })
  }

  const renderChart_wasteful_expenditure = () => {
    let color = '#d6d6d6'
    data_waste_exp = {
      labels: sortedData,
      datasets: []
    }
    noYears.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#E0E0E0'
          break;
        case 1:
          color = '#D0D1E6'
          break;
        case 2:
          color = '#74A9CF'
          break;
        case 3:
          color = '#0570B0'
          break;
        default:
          color = '#d6d6d6'
      }

      data_waste_exp.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_wasteful_expenditure[i],
        backgroundColor: color,
        borderColor: color,
      })
    })
    setWaste_exp(data_waste_exp)
  }
  const renderChart_irregular_expenditure = () => {
    let color = '#d6d6d6'
    irregular_expend = {
      labels: sortedData,
      datasets: []
    }
    noYears.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#E0E0E0'
          break;
        case 1:
          color = '#D0D1E6'
          break;
        case 2:
          color = '#74A9CF'
          break;
        case 3:
          color = '#0570B0'
          break;
        default:
          color = '#d6d6d6'
      }
      irregular_expend.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_irregular_expenditure[i],
        backgroundColor: color,
        borderColor: color,
      })
    })
    setIrre_expend(irregular_expend)
  }
  const renderChart_fruitless_expenditure  = () => {
    let color = '#d6d6d6'
    data_fruit_expend = {
      labels: sortedData,
      datasets: []
    }
    noYears1.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#E0E0E0'
          break;
        case 1:
          color = '#D0D1E6'
          break;
        case 2:
          color = '#74A9CF'
          break;
        case 3:
          color = '#0570B0'
          break;
        default:
          color = '#d6d6d6'
      }

      data_fruit_expend.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_fruitless_expenditure[i],
        backgroundColor: color,
        borderColor: color,
      })
    })
    setFruit_ex(data_fruit_expend)
  }
  const renderChart_unauthorised_expenditure  = () => {
    let color = '#d6d6d6'
    data_unauth_expend = {
      labels: sortedData,
      datasets: []
    }
    noYears1.forEach(function (a, i) {
      switch (i) {
        case 0:
          color = '#E0E0E0'
          break;
        case 1:
          color = '#D0D1E6'
          break;
        case 2:
          color = '#74A9CF'
          break;
        case 3:
          color = '#0570B0'
          break;
        default:
          color = '#d6d6d6'
      }

      data_unauth_expend.datasets.push({
        label: a,
        stack: 'Stack ' + i,
        data: final_unauthorised_expenditure[i],
        backgroundColor: color,
        borderColor: color,
      })
    })
    setUnauth_exp(data_unauth_expend)
  }

  //Pie chart

  return (
    <div >
      {loader ?
        <Modal id="loader" isOpen={loader} className="modal-dialog-centered loader">
          <ModalBody>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-0 ml-3 pt-4">
                <Spinner type="grow" color="secondary" size="sm" />
                <Spinner type="grow" color="success" size="sm" />
                <Spinner type="grow" color="danger" size="sm" />
                <Spinner type="grow" color="warning" size="sm" />
              </div>
              <div className="col-0 pt-4 pl-4 float-left">Loading Content...</div>
            </div>
            <br />
          </ModalBody>
        </Modal>
        : ''
      }
      <div className='container-fluid charts_dashboards'>
          <div className='charts_dashboards--left_container p-0'>
            <div className='charts_dashboards--select'>
              <div className='charts_dashboards--select-container'>
                  <Select
                    id='multiple'
                    name="filters"
                    placeholder="Filter City"
                    value={multiValue}
                    options={filterOptions}
                    onChange={handleMultiChange}
                    isMulti={isMulti}
                    styles={style}
                  />
              </div>
            </div>
            <div className='charts_dashboards--barcharts'>
              <div className='row'>
                <div className='col-md-4 left-container'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Unauthorised, irregular, fruitless & wastful expenditure</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='#' target='_blank' /></div>
                    </div>
                    {/* <canvas id='wasteful_expenditure'></canvas> */}
                    <BarChart data={waste_exp} stepSize={2} hundred={false} divide={1}/>
                  </div>
                  <div className='post_breakdown-container'>
                      <h1>Context Notes</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                         Ornare suspendisse sed nisi lacus sed viverra tellus in hac. 
                         Vitae tempus quam pellentesque nec.</p>
                      <h1>Link to Budget Report</h1>

                      <a  href='https://www.budgetreportspending1.gov.za' target='_blank'>https://www.budgetreportspending1.gov.za</a><br/>
                      <a  href='https://www.budgetreportspending2.gov.za' target='_blank'>https://www.budgetreportspending2.gov.za</a><br/>
                      <a  href='https://www.budgetreportspending3.gov.za' target='_blank'>https://www.budgetreportspending3.gov.za</a><br/>

                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Irregular Expenditure</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data' href='#' target='_blank' /></div>
                    </div>
                    <BarChart data={irreg_expend} stepSize={2} hundred={false} divide={1}/>
                  </div>
                  <div className='post_breakdown-container'>
                        <h1>Definitions</h1>
                        <p><b>Irregular Expenditure: </b>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Unde rerum quae iusto, ut asperiores commodi quibusdam deserunt. 
                        Voluptatum libero facilis corporis soluta ex. Earum officia eaque, 
                        autem quia et expedita.
                        </p>
                        <p><b>fruitless & Wasteful Expenditure: </b>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Unde rerum quae iusto, ut asperiores commodi quibusdam deserunt. 
                        Voluptatum libero facilis corporis soluta ex. Earum officia eaque, 
                        autem quia et expedita.
                        </p>
                        <p><b>Unauthorised Expenditure: </b>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Unde rerum quae iusto, ut asperiores commodi quibusdam deserunt. 
                        Voluptatum libero facilis corporis soluta ex. Earum officia eaque, 
                        autem quia et expedita.
                        </p>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Fruitless & Wasteful Expenditure</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data'  href='#' target='_blank' /></div>
                    </div>
                    <BarChart data={fruit_ex} stepSize={0.2} hundred={false} divide={1} finance={true}/>
                  </div>
                  <div>
                  <div className='charts'>
                    <div className='row'>
                      <div className='col-md-9'><h1 className='charts_dashboards--households'>Unauthorised Expenditure</h1></div>
                      <div className='col-md-3'><Button className='charts_dashboards--button' text='Raw Data'  href='#' target='_blank' /></div>
                    </div>
                    <BarChart data={unauth_exp} stepSize={0.5} hundred={false} divide={1} finance={true}/>
                  </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='spacer'></div>
      </div>
  )
}
export default CitizenEngagmentes;