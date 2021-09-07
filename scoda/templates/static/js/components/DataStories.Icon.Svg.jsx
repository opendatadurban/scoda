import React, { Component } from 'react';

export default class DataStoriesSVGIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <svg width="26px" height="24px" viewBox="0 0 26 24" version="1.1" xmlns="https://www.w3.org/2000/svg">
                    <defs>
                        <filter x="-6.0%" y="-40.0%" width="112.0%" height="180.0%" filterUnits="objectBoundingBox" id="filter-1">
                            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                            <feGaussianBlur stdDeviation="2.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.3 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                            <feMerge>
                                <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>
                    </defs>
                    <g id="Data-Stories" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                        <g id="State-of-Cities-Finance-2018---Financing-Infrastructure" transform="translate(-139.000000, -84.000000)" fill-rule="nonzero" stroke="#4A4A4A" stroke-width="1.79581363">
                            <g id="Back-Button" filter="url(#filter-1)" transform="translate(113.000000, 79.000000)">
                                <g id="icon_return" transform="translate(39.500000, 16.000000) rotate(-270.000000) translate(-39.500000, -16.000000) translate(33.000000, 9.000000)">
                                    <line x1="6.5" y1="0" x2="6.5" y2="13" id="Line"></line>
                                    <path d="M0,9 L5.66749664,13.6885432 C6.15056216,14.0881683 6.84943784,14.0881683 7.33250336,13.6885432 L13,9 L13,9" id="Path-3"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        )
    }
}


