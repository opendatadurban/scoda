import React, { Component } from 'react';
import $ from 'jquery'; 

export default class FilterPill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reload:true
        }
    }

    componentDidMount() {
        // Reload Page Function //
        function reloadPage() {
            var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
            // Current Time //
            var now = Date.now();
            // Total Process Lenght as Minutes //
            var tenSec = 10 * 1000;
            // End Time of Process //
            var plusTenSec = currentDocumentTimestamp + tenSec;
            if (now > plusTenSec) {
                location.reload();
            }
        }
        // You can call it in somewhere //
        reloadPage();

        //filter
        $("#filter .btn").each(function () {
            $(this).on("click", function () {
                var filtertag = 'data-story-card';
                if ($(this).hasClass("data-story-card-productive")) {
                    filtertag = 'data-story-card-productive';
                }
                else if ($(this).hasClass("data-story-card-inclusive")) {
                    filtertag = 'data-story-card-inclusive';
                }
                else if ($(this).hasClass("data-story-card-well-governed")) {
                    filtertag = 'data-story-card-well-governed';
                }
                else if ($(this).hasClass("data-story-card-sustainable")) {
                    filtertag = 'data-story-card-sustainable';
                }
                else if ($(this).hasClass("data-story-card-built")) {
                    filtertag = 'data-story-card-built';
                }
                else if ($(this).hasClass("data-story-card-city")) {
                    filtertag = 'data-story-card-city';
                }

                if ($('.indicator_card.' + filtertag).is(":visible")) {
                    $('.indicator_card.' + filtertag).hide();
                }
                else {
                    $('.indicator_card.' + filtertag).show();
                }

                if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                }
                else {
                    $(this).addClass('selected');
                }

            });
        });

    }

    render() {
        let main_class ='data-story-trigger';

        if(this.props.filter == 'Productive Cities'){
            main_class = 'data-story-trigger data-story-card-productive data-story-card-productive-filter';
        }
        else if(this.props.filter == 'Inclusive Cities'){
            main_class = 'data-story-trigger data-story-card-inclusives data-story-card-inclusives-filter';
        }
        else if(this.props.filter == 'Well Governed Cities'){
            main_class = 'data-story-trigger data-story-card-well data-story-card-well-filter';
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
            textAlign: 'center'
        };

        return (
            <div id="filter_"><a className={main_class} style={pillStyle}>{this.props.filter}</a></div>
        )
    }
}