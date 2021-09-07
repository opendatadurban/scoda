import React,{ Component } from 'react'
import Select from './Select'

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
            refuse_removal:45
          }
          this.place = this.place.bind(this)
          this.colorUpdate = this.colorUpdate.bind(this)
    }
      place(e){
        this.setState({place:e.target.value}); 

        if(e.target.value ==='Buffalo City'){
            this.setState({water_supply:12}); 
            this.setState({basic_sanit:34}); 
            this.setState({elec_supply:34}); 
            this.setState({refuse_removal:45}); 
        }
        if(e.target.value ==='City of Cape Town'){
            this.setState({water_supply:22}); 
            this.setState({basic_sanit:24}); 
            this.setState({elec_supply:24}); 
            this.setState({refuse_removal:25}); 
        }
        if(e.target.value ==='City of Joburg'){
            this.setState({water_supply:32}); 
            this.setState({basic_sanit:34}); 
            this.setState({elec_supply:34}); 
            this.setState({refuse_removal:35}); 
        }
        if(e.target.value ==='Ekurhuleni'){
            this.setState({water_supply:42}); 
            this.setState({basic_sanit:98}); 
            this.setState({elec_supply:44}); 
            this.setState({refuse_removal:45}); 
        }
        if(e.target.value ==='eThekwini'){
            this.setState({water_supply:12}); 
            this.setState({basic_sanit:34}); 
            this.setState({elec_supply:99}); 
            this.setState({refuse_removal:45}); 
        }
        if(e.target.value ==='Mangaung'){
            this.setState({water_supply:12}); 
            this.setState({basic_sanit:34}); 
            this.setState({elec_supply:97}); 
            this.setState({refuse_removal:45}); 
        }
        if(e.target.value ==='Nelson Mandela Bay'){
            this.setState({water_supply:12}); 
            this.setState({basic_sanit:34}); 
            this.setState({elec_supply:96}); 
            this.setState({refuse_removal:45}); 
        }
        if(e.target.value ==='Tshwane'){
            this.setState({water_supply:95}); 
            this.setState({basic_sanit:34}); 
            this.setState({elec_supply:34}); 
            this.setState({refuse_removal:45}); 
        }

      }
      colorUpdate(){
        if(this.state.water_supply < 79){document.getElementById('water_s').style.color='#F94144'}
        else if(this.state.water_supply > 79){document.getElementById('water_s').style.color='#36A39C'}
        else {document.getElementById('water_s').style.color='#2F3442'}

        if(this.state.basic_sanit < 75){document.getElementById('basic_s').style.color='#F94144'}
        else if(this.state.basic_sanit > 75){document.getElementById('basic_s').style.color='#36A39C'}
        else{document.getElementById('basic_s').style.color='#2F3442'}

        if(this.state.elec_supply < 81){document.getElementById('elec_s').style.color='#F94144'}
        else if(this.state.elec_supply > 81){document.getElementById('elec_s').style.color='#36A39C'}
        else{document.getElementById('elec_s').style.color='#2F3442'}

        if(this.state.refuse_removal < 71){document.getElementById('refuse_r').style.color='#F94144'}
        else if(this.state.refuse_removal > 71){document.getElementById('refuse_r').style.color='#36A39C'}
        else{document.getElementById('refuse_r').style.color='#2F3442'}
      }
      componentDidUpdate(){
        this.colorUpdate()
      }
      componentDidMount(){
        this.colorUpdate()
      }
    render(){
        return(
            <div className='stat_display_panel'>
                <div className='row stat_display_panel--numbers w-100'>
                    <div className='col-md-6 first_panel'>
                    <p className='catagory-name '>Averages 2018 <span>(Access to Basic Services)</span></p>
                        <div className='row'>
                        <div className='col p-0'>
                        <h1>79%</h1>
                        <p>Water<br/>Supply</p>
                        </div>
                        <div className='col'>
                        <h1>75%</h1>
                        <p>Basic<br/>Sanit.</p>
                        </div>
                        <div className='col'>
                        <h1>81%</h1>
                        <p>Elec.<br/>Supply</p>
                        </div>
                        <div className='col'>
                        <h1>71%</h1>
                        <p>Refuse<br/>Removal</p>
                        </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-8'> <p className='catagory-name '>Municipality Focus 2018: {this.state.place}</p></div>
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
                        <p>Basic<br/>Sanit.</p>
                        </div>
                        <div className='col'>
                        <h1 id='elec_s'>{this.state.elec_supply}%</h1>
                        <p>Elec.<br/>Supply</p>
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