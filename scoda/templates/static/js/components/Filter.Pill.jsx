import React, { Component } from 'react';
import $ from 'jquery'; 

let productive = "data-story-card-productive";
let inclusive = "data-story-card-inclusive";
let well = "data-story-card-well-governed";
let employnent = "data-story-card-employment";
let economy = "data-story-card-economy";
let service ="data-story-card-service";

export default class FilterPill extends Component {
    constructor(props) {
        super(props);

        this.filter = this.filter.bind(this)
    }

    filter(e) {

        if (e.target.classList.contains(productive)) {
            console.log('clicked')
            if (document.getElementById(productive).style.display === "block") {
                document.getElementById(productive).style.display = "none"
                e.target.classList.add('selected');

                console.log('clicked')
            }
            else {
                document.getElementById(productive).style.display = "block"
                e.target.classList.remove('selected');
            }
        }
        else if (e.target.classList.contains(inclusive)) {
            if (document.getElementById(inclusive).style.display === "block") {
                document.getElementById(inclusive).style.display = "none"
                document.getElementById(inclusive + "1").style.display = "none"
                e.target.classList.add('selected');
            }
            else {
                document.getElementById(inclusive).style.display = "block"
                document.getElementById(inclusive + "1").style.display = "block"
                e.target.classList.remove('selected');
            }
        }

        else if (e.target.classList.contains(well)) {
            if (document.getElementById(well).style.display === "block") {
                document.getElementById(well).style.display = "none"
                document.getElementById(well + "1").style.display = "none"
                e.target.classList.add('selected');
            }
            else {
                document.getElementById(well).style.display = "block"
                document.getElementById(well + "1").style.display = "block"
                e.target.classList.remove('selected');
            }
        }
        else if (e.target.classList.contains(employnent)) {
            if (document.getElementById(employnent).style.display === "block") {
                document.getElementById(employnent).style.display = "none"
                e.target.classList.add('selected');
            }
            else {
                document.getElementById(employnent).style.display = "block"
                e.target.classList.remove('selected');
            }
        }
        else if (e.target.classList.contains(economy)) {
            if (document.getElementById(economy).style.display === "block") {
                document.getElementById(economy).style.display = "none"
                document.getElementById(economy+"1").style.display = "none"
                e.target.classList.add('selected');
            }
            else {
                document.getElementById(economy).style.display = "block"
                document.getElementById(economy+"1").style.display = "block"
                e.target.classList.remove('selected');
            }
        }
        else if (e.target.classList.contains(service)) {
            if (document.getElementById(service).style.display === "block") {
                document.getElementById(service).style.display = "none"
                e.target.classList.add('selected');
            }
            else {
                document.getElementById(service).style.display = "block"
                e.target.classList.remove('selected');
            }

        }

    }

    render() {
        let main_class ='data-story-trigger';

        if(this.props.filter == 'Productive Cities'){
            main_class = 'data-story-trigger data-story-card-productive data-story-card-productive-filter';
        }
        else if(this.props.filter == 'Inclusive Cities'){
            main_class = 'data-story-trigger data-story-card-inclusive data-story-card-inclusives-filter';
        }
        else if(this.props.filter == 'Well Governed Cities'){
            main_class = 'data-story-trigger data-story-card-well-governed data-story-card-well-filter';
        }
        else if(this.props.filter == 'Sustainable Cities'){
            main_class = 'data-story-trigger data-story-card-sustainable data-story-card-sustainable-filter';
        }
        else if(this.props.filter == 'Built Enviroment'){
            main_class = 'data-story-trigger data-story-card-built data-story-card-built-filter';
        }
        else if(this.props.filter == 'City Demographics'){
            main_class = 'data-story-trigger data-story-card-city data-story-card-city-filter';
        }
        else if(this.props.filter == 'Employment'){
            main_class = 'data-story-trigger data-story-card-employment data-story-card-employment-filter';
        }
        else if(this.props.filter == 'Services'){
            main_class = 'data-story-trigger data-story-card-service';
        }
        else if(this.props.filter == 'Economy'){
            main_class = 'data-story-trigger data-story-card-economy';
        }

        let pillStyle = {
            boxSizing: 'border-box',
            height: '34px',
            width: '164px',
            border: `2px solid ${this.props.color}`,
            borderRadius: '25px',
            backgroundColor: this.props.color,
            color: '#FFFFFF',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            letterSpacing: '0',
            lineHeight: '30px',
            textAlign: 'center',
            cursor: "pointer",
        };

        return (
            <div id="filter_"><a className={""+main_class} style={pillStyle} onClick={this.filter}>{this.props.filter}</a></div>
        )
    }
}