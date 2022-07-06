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
            $('#' + productive).toggle();
            $(e.target).toggleClass('selected')
        }
        if (e.target.classList.contains(inclusive)) {
            $('#' + inclusive).toggle()
            $('#' + inclusive + "1").toggle()
            $(e.target).toggleClass('selected')
        }

        if (e.target.classList.contains(well)) {
            $('#' + well).toggle()
            $('#' + well + "1").toggle()
            $('#' + well + "2").toggle()
            $('#' + well + "3").toggle()
            $('#' + well + "4").toggle()
            $('#' + well + "5").toggle()
            $(e.target).toggleClass('selected')
        }
        if (e.target.classList.contains(employnent)) {
            $('#' + employnent).toggle()
            $(e.target).toggleClass('selected')
        }
        if (e.target.classList.contains(economy)) {
            $('#' + economy).toggle()
            $('#' + economy + "1").toggle()
            $(e.target).toggleClass('selected')
        }
        if (e.target.classList.contains(service)) {
            $('#' + service).toggle()
            $(e.target).toggleClass('selected')
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