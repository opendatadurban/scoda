import React, { Component,PureComponent  } from 'react'

import { Bar } from 'react-chartjs-2'


class Legend extends PureComponent {
  render() {
    let legend = this.props.legend.filter(item=> item.props.dataQuantity > 0)
                    .sort((a,b) =>  b.props.dataQuantity - a.props.dataQuantity)
    return (
      <ul className="legend-group">
        {legend}
      </ul>
    )
  }
}


export default class ChartCustomLegend extends Component {

    constructor(props) {
        super(props)
        this.state = {
            legend: []
        }
    }

    componentDidMount() {
        const legend = this.chart && this.chart.chartInstance.generateLegend()
        this.setState({
            legend
        })
    }
    handleLegendOnClick = e => {
        let inst = this.chart.chartInstance
        let el = document.getElementById(e.currentTartget.id)

        if (el.classList.contains("btn-disabled")) {
            el.classList.remove("btn-disabled")
        } else {
            el.classList.add("btn-disabled")
        }

        let t = el.attributes("dataIdx")
        let meta = instance.config.data.dataset[0]._meta
        let first = Object.keys(meta)[0]
        meta[first].data[t].hidden = !meta[first].data[t].hidden
        inst.update()
    }

    legendMarkup = chart => {
        const legendSet = chart.data.datasets[0];
        const legend = legendSet.data.map((set, i) => {
            let datapoint = chart.data.labels[i];
            if (datapoint) {
                return (
                    <li
                        id={`${datapoint.replace(/\s/g, "")}`}
                        key={datapoint}
                        onClick={e => this.handleLegendOnClick(e)}
                        className="legend-group--item list-group-item"
                        data-idx={i}
                        data-quantity={legendSet.data[i]}
                        style={{ borderColor: legendSet.backgroundColor[i] }}
                    >
                        <mark
                            style={{
                                backgroundColor: legendSet.backgroundColor[i] || "#e5e5e5"
                            }}
                        >
                            {legendSet.data[i]}
                        </mark>
                        {`${datapoint.replace(/\(\d{1, 6}\)$/g, "")}`}
                    </li>
                );
            }
            return <h1>No legend</h1>;
        });

        return legend;
    };

   

    render() {
        const { legend } = this.state
        return (<div style={{position:"relative"}}>
            <Legend ref={el => { this.legend = el }} legend={legend}
            handleLegendOnClick={e => this.handleLegendOnClick(e)}>

            </Legend>
            <Bar height={this.props.height} ref={el => this.chart = el}
                data={this.props.data}
                options={{
                    legend: {
                        display: true
                    },
                    legendCallback: this.legendMarkup
                }}></Bar>
        </div>)
    }
}


