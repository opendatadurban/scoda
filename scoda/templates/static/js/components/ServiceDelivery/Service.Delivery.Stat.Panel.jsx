import React,{ Component } from 'react'
import Select from '../Select'
import axios from 'axios';

const mydata = {
    pl : {
       id: "my-select",
       multiple: false,
       data : ['Buffalo City','City of Cape Town','City of Joburg','Ekurhuleni','eThekwini','Mangaung','Nelson Mandela Bay','Tshwane']
    }
  }


export default class Statistics_display extends Component {
    constructor(props){
        super(props);
        this.state = {
            place:"Buffalo City",
            water_supply:12,
            basic_sanit:34,
            elec_supply:34,
            refuse_removal:45,
            water_supply_average:0,
            basic_sanit_average:0,
            elec_supply_average:0,
            refuse_removal_average:0,
            //water supply
            ws_buffalo:0,
            ws_capetown:0,
            ws_joburg:0,
            ws_ekurhuleni:0,
            ws_mangaung:0,
            ws_nmb:0,
            ws_tshwane:0,
            ws_ethekwini:0,
            //basic sanitation
            bs_buffalo:0,
            bs_capetown:0,
            bs_joburg:0,
            bs_ekurhuleni:0,
            bs_mangaung:0,
            bs_nmb:0,
            bs_tshwane:0,
            bs_ethekwini:0,
            //elec
            elec_buffalo:0,
            elec_capetown:0,
            elec_joburg:0,
            elec_ekurhuleni:0,
            elec_mangaung:0,
            elec_nmb:0,
            elec_tshwane:0,
            elec_ethekwini:0,
            //refuse removal
            rr_buffalo:0,
            rr_capetown:0,
            rr_joburg:0,
            rr_ekurhuleni:0,
            rr_mangaung:0,
            rr_nmb:0,
            rr_tshwane:0,
            rr_ethekwini:0,
          }
          this.place = this.place.bind(this)
          this.colorUpdate = this.colorUpdate.bind(this)
          this.percentage_of_household_with_basic_water_supply = this.percentage_of_household_with_basic_water_supply.bind(this)
    }
    assignOnload() {
        this.setState({water_supply:this.state.ws_buffalo}); 
        this.setState({basic_sanit:this.state.bs_buffalo}); 
        this.setState({elec_supply:this.state.elec_buffalo}); 
        this.setState({refuse_removal:this.state.rr_buffalo}); 
      }
        percentage_of_household_with_basic_water_supply() {
            axios.get(`/api/explore/codebook?indicator_id=392`).then(res => {    
                let ethekwini,tshwane,nmb,mangaung,ekurhuleni,joburg,capetown,buffalo,subtotal,total=0 
                //2018 data
                ethekwini = res.data.table[32].slice(2,3)[0]
                tshwane = res.data.table[28].slice(2,3)[0]
                nmb = res.data.table[24].slice(2,3)[0]
                mangaung = res.data.table[20].slice(2,3)[0]
                ekurhuleni = res.data.table[16].slice(2,3)[0]
                joburg = res.data.table[12].slice(2,3)[0]
                capetown = res.data.table[8].slice(2,3)[0]
                buffalo = res.data.table[4].slice(2,3)[0]

                this.setState({ws_buffalo : Math.round(buffalo)})
                this.setState({ws_capetown: Math.round(capetown)})
                this.setState({ws_joburg : Math.round(joburg)})
                this.setState({ws_ekurhuleni: Math.round(ekurhuleni)})
                this.setState({ws_mangaung : Math.round(mangaung)})
                this.setState({ws_nmb: Math.round(nmb)})
                this.setState({ws_tshwane : Math.round(tshwane)})
                this.setState({ws_ethekwini : Math.round(ethekwini)})
                this.assignOnload()
                //Find Average Percentage
                subtotal = ethekwini + tshwane + nmb + mangaung + ekurhuleni + joburg + capetown + buffalo
                total = subtotal / 8
                this.setState({water_supply_average : Math.round(total)})
            });
            }
        percentage_of_households_with_access_to_basic_sanitation() {
            axios.get(`/api/explore/codebook?indicator_id=384`).then(res => {  
                let ethekwini,tshwane,nmb,mangaung,ekurhuleni,joburg,capetown,buffalo,subtotal,total=0 

                //2018 data
                ethekwini = res.data.table[32].slice(2,3)[0]
                tshwane = res.data.table[28].slice(2,3)[0]
                nmb = res.data.table[24].slice(2,3)[0]
                mangaung = res.data.table[20].slice(2,3)[0]
                ekurhuleni = res.data.table[16].slice(2,3)[0]
                joburg = res.data.table[12].slice(2,3)[0]
                capetown = res.data.table[8].slice(2,3)[0]
                buffalo = res.data.table[4].slice(2,3)[0]

                this.setState({bs_buffalo : Math.round(buffalo)})
                this.setState({bs_capetown: Math.round(capetown)})
                this.setState({bs_joburg : Math.round(joburg)})
                this.setState({bs_ekurhuleni: Math.round(ekurhuleni)})
                this.setState({bs_mangaung : Math.round(mangaung)})
                this.setState({bs_nmb: Math.round(nmb)})
                this.setState({bs_tshwane : Math.round(tshwane)})
                this.setState({bs_ethekwini : Math.round(ethekwini)})
                this.assignOnload()
    
                //Find Average Percentage
                subtotal = ethekwini + tshwane + nmb + mangaung + ekurhuleni + joburg + capetown + buffalo
                total = subtotal / 8
                this.setState({basic_sanit_average : Math.round(total)})
            });
            }

        percentage_of_households_with_access_to_electricity() {
            axios.get(`/api/explore/codebook?indicator_id=10`).then(res => {
            let ethekwini,tshwane,nmb,mangaung,ekurhuleni,joburg,capetown,buffalo,subtotal,total=0 

            //2018 data
            ethekwini = res.data.table[32].slice(2,3)[0]
            tshwane = res.data.table[28].slice(2,3)[0]
            nmb = res.data.table[24].slice(2,3)[0]
            mangaung = res.data.table[20].slice(2,3)[0]
            ekurhuleni = res.data.table[16].slice(2,3)[0]
            joburg = res.data.table[12].slice(2,3)[0]
            capetown = res.data.table[8].slice(2,3)[0]
            buffalo = res.data.table[4].slice(2,3)[0]

            this.setState({elec_buffalo : Math.round(buffalo)})
            this.setState({elec_capetown: Math.round(capetown)})
            this.setState({elec_joburg : Math.round(joburg)})
            this.setState({elec_ekurhuleni: Math.round(ekurhuleni)})
            this.setState({elec_mangaung : Math.round(mangaung)})
            this.setState({elec_nmb: Math.round(nmb)})
            this.setState({elec_tshwane : Math.round(tshwane)})
            this.setState({elec_ethekwini : Math.round(ethekwini)})
            this.assignOnload()
    
            //Find Average Percentage
            subtotal = ethekwini + tshwane + nmb + mangaung + ekurhuleni + joburg + capetown + buffalo
            total = subtotal / 8
            this.setState({elec_supply_average : Math.round(total)})
        });
        }
        percentage_households_with_weekly_municipal_refuse_removal() {
            axios.get(`/api/explore/codebook?indicator_id=1114`).then(res => {
            let ethekwini,tshwane,nmb,mangaung,ekurhuleni,joburg,capetown,buffalo,subtotal,total=0 

            //2018 data
            ethekwini = res.data.table[32].slice(2,3)[0]
            tshwane = res.data.table[28].slice(2,3)[0]
            nmb = res.data.table[24].slice(2,3)[0]
            mangaung = res.data.table[20].slice(2,3)[0]
            ekurhuleni = res.data.table[16].slice(2,3)[0]
            joburg = res.data.table[12].slice(2,3)[0]
            capetown = res.data.table[8].slice(2,3)[0]
            buffalo = res.data.table[4].slice(2,3)[0]

            this.setState({rr_buffalo : Math.round(buffalo)})
            this.setState({rr_capetown: Math.round(capetown)})
            this.setState({rr_joburg : Math.round(joburg)})
            this.setState({rr_ekurhuleni: Math.round(ekurhuleni)})
            this.setState({rr_mangaung : Math.round(mangaung)})
            this.setState({rr_nmb: Math.round(nmb)})
            this.setState({rr_tshwane : Math.round(tshwane)})
            this.setState({rr_ethekwini : Math.round(ethekwini)})
            this.assignOnload()
    
            //Find Average Percentage
            subtotal = ethekwini + tshwane + nmb + mangaung + ekurhuleni + joburg + capetown + buffalo
            total = subtotal / 8
            this.setState({refuse_removal_average : Math.round(total)})
        });
        }
      place(e){
        this.setState({place:e.target.value}); 

        if(e.target.value ==='Buffalo City'){
            this.setState({water_supply:this.state.ws_buffalo}); 
            this.setState({basic_sanit:this.state.bs_buffalo}); 
            this.setState({elec_supply:this.state.elec_buffalo}); 
            this.setState({refuse_removal:this.state.rr_buffalo}); 
        }
        if(e.target.value ==='City of Cape Town'){
            this.setState({water_supply:this.state.ws_capetown}); 
            this.setState({basic_sanit:this.state.bs_capetown}); 
            this.setState({elec_supply:this.state.elec_capetown}); 
            this.setState({refuse_removal:this.state.rr_capetown}); 
        }
        if(e.target.value ==='City of Joburg'){
            this.setState({water_supply:this.state.ws_joburg}); 
            this.setState({basic_sanit:this.state.bs_joburg}); 
            this.setState({elec_supply:this.state.elec_joburg}); 
            this.setState({refuse_removal:this.state.rr_joburg}); 
        }
        if(e.target.value ==='Ekurhuleni'){
            this.setState({water_supply:this.state.ws_ekurhuleni}); 
            this.setState({basic_sanit:this.state.bs_ekurhuleni}); 
            this.setState({elec_supply:this.state.elec_ekurhuleni}); 
            this.setState({refuse_removal:this.state.rr_ekurhuleni}); 
        }
        if(e.target.value ==='eThekwini'){
            this.setState({water_supply:this.state.ws_ethekwini}); 
            this.setState({basic_sanit:this.state.bs_ethekwini}); 
            this.setState({elec_supply:this.state.elec_ethekwini}); 
            this.setState({refuse_removal:this.state.rr_ethekwini}); 
        }
        if(e.target.value ==='Mangaung'){
            this.setState({water_supply:this.state.ws_mangaung}); 
            this.setState({basic_sanit:this.state.bs_mangaung}); 
            this.setState({elec_supply:this.state.elec_mangaung}); 
            this.setState({refuse_removal:this.state.rr_mangaung}); 
        }
        if(e.target.value ==='Nelson Mandela Bay'){
            this.setState({water_supply:this.state.ws_nmb}); 
            this.setState({basic_sanit:this.state.bs_nmb}); 
            this.setState({elec_supply:this.state.elec_nmb}); 
            this.setState({refuse_removal:this.state.rr_nmb}); 
        }
        if(e.target.value ==='Tshwane'){
            this.setState({water_supply:this.state.ws_tshwane}); 
            this.setState({basic_sanit:this.state.bs_tshwane}); 
            this.setState({elec_supply:this.state.elec_tshwane}); 
            this.setState({refuse_removal:this.state.rr_tshwane}); 
        }

      }
      colorUpdate(){
        if(this.state.water_supply < this.state.water_supply_average){document.getElementById('water_s').style.color='#F94144'}
        else if(this.state.water_supply > this.state.water_supply_average){document.getElementById('water_s').style.color='#36A39C'}
        else {document.getElementById('water_s').style.color='#2F3442'}

        if(this.state.basic_sanit < this.state.basic_sanit_average){document.getElementById('basic_s').style.color='#F94144'}
        else if(this.state.basic_sanit > this.state.basic_sanit_average){document.getElementById('basic_s').style.color='#36A39C'}
        else{document.getElementById('basic_s').style.color='#2F3442'}

        if(this.state.elec_supply < this.state.elec_supply_average){document.getElementById('elec_s').style.color='#F94144'}
        else if(this.state.elec_supply > this.state.elec_supply_average){document.getElementById('elec_s').style.color='#36A39C'}
        else{document.getElementById('elec_s').style.color='#2F3442'}

        if(this.state.refuse_removal < this.state.refuse_removal_average){document.getElementById('refuse_r').style.color='#F94144'}
        else if(this.state.refuse_removal > this.state.refuse_removal_average){document.getElementById('refuse_r').style.color='#36A39C'}
        else{document.getElementById('refuse_r').style.color='#2F3442'}
      }

      componentDidUpdate(){
        this.colorUpdate()
      }
      componentDidMount(){
        
        this.colorUpdate()
        this.percentage_of_household_with_basic_water_supply()
        this.percentage_of_households_with_access_to_basic_sanitation() 
        this.percentage_of_households_with_access_to_electricity()
        this.percentage_households_with_weekly_municipal_refuse_removal()
      }
    render(){
        return(
            <div className='stat_display_panel'>
                <div className='row stat_display_panel--numbers w-100'>
                    <div className='col-md-6 first_panel'>
                    <div className='stat_display_panel--averages'>
                    <p className='catagory-name '>Averages 2018 <span>(Access to Basic Services)</span></p>
                    </div>
                        <div className='row'>
                        <div className='col p-0'>
                        <h1>{this.state.water_supply_average}%</h1>
                        <p>Water<br/>Supply</p>
                        </div>
                        <div className='col'>
                        <h1>{this.state.basic_sanit_average}%</h1>
                        <p>Basic<br/>Sanitation</p>
                        </div>
                        <div className='col'>
                        <h1>{this.state.elec_supply_average}%</h1>
                        <p>Electricity<br/>Supply</p>
                        </div>
                        <div className='col'>
                        <h1>{this.state.refuse_removal_average}%</h1>
                        <p>Refuse<br/>Removal</p>
                        </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-8'> <p className='catagory-name catagory-name--focusName'>Municipality Focus 2018: {this.state.place}</p></div>
                            <div className='col-md-3'>                               
                             <Select 
                                    value={this.state.place}
                                    placeholder='Select a City'
                                    id={mydata.pl.id}
                                    multiple={mydata.pl.multiple}
                                    data={mydata.pl.data}
                                    name = 'gender'
                                    onChange={this.place}
        
                                  /></div>
                       
                        </div>
                        <div className='row'>
                        <div className='col'>
                        <h1 id='water_s'>{this.state.water_supply}%</h1>
                        <p>Water<br/>Supply</p>
                        </div>
                        <div className='col'>
                        <h1 id='basic_s'>{this.state.basic_sanit}%</h1>
                        <p>Basic<br/>Sanitation</p>
                        </div>
                        <div className='col'>
                        <h1 id='elec_s'>{this.state.elec_supply}%</h1>
                        <p>Electricity<br/>Supply</p>
                        </div>
                        <div className='col'>
                        <h1 id='refuse_r'>{this.state.refuse_removal}%</h1>
                        <p>Refuse<br/>Removal</p>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}