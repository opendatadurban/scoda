import React from 'react';
import { Component } from 'react';
import DataStoriesContentCardContentBlock from '../components/DataStories.Content.Card.ContentBlock'
import DataStoriesContentCardHighlightBlock from '../components/DataStories.Content.Card.Carousel.HighlightBlock';

const tableData = [
    {
        title:"8.  Experience of crime/\nviolence",
        JHB:{
                percentage:"10%",
                color:"#FC8D59"
            },
          
           CPT:{
            percentage:"11%",
                color:"#E0635D"
            },
           
           ETH:{
            percentage:"6%",
                color:"#1A9850"
            },
            EKU:{
                percentage:"8%",
                color:"#D9EF8B"
            },       
            TSH:{
                percentage:"9%",
                color:"#FEE08B"
            },
            NMB:{
                percentage:"8%",
                color:"#D9EF8B"
            },
            MAN:{
                percentage:"6%",
                color:"#1A9850"
            },
            BCM:{
                percentage:"8%",
                color:"#FFFFFF"
            },
            MSU:{
                percentage:"8%",
                color:"#FEE08B"
            },
    },
    {
        title:"9.  Feelings of safety/\n fear of crime",
        JHB:{
                percentage:"24%",
                color:"#FEE08B"
            },
          
           CPT:{
            percentage:"28%",
                color:"#E0635D"
            },
           
           ETH:{
            percentage:"23%",
                color:"#fff"
            },
            EKU:{
                percentage:"22%",
                color:"#D9EF8B"
            },       
            TSH:{
                percentage:"19%",
                color:"#1A9850"
            },
            NMB:{
                percentage:"26%",
                color:"#FC8D59"
            },
            MAN:{
                percentage:"21%",
                color:"#91CF60"
            },
            BCM:{
                percentage:"27%",
                color:"#E0635D"
            },
            MSU:{
                percentage:"8%",
                color:"#D9EF8B"
            },
    },    {
        title:"10. Perception/satisfaction\n with law enforcement",
        JHB:{
                percentage:"58%",
                color:"#fff"
            },
          
           CPT:{
            percentage:"49%",
                color:"#FC8D59"
            },
           
           ETH:{
            percentage:"56%",
                color:"#FEE08B"
            },
            EKU:{
                percentage:"66%",
                color:"#1A9850"
            },       
            TSH:{
                percentage:"50%",
                color:"#FC8D59"
            },
            NMB:{
                percentage:"59%",
                color:"#D9EF8B"
            },
            MAN:{
                percentage:"62%",
                color:"#91CF60"
            },
            BCM:{
                percentage:"44%",
                color:"#E0635D"
            },
            MSU:{
                percentage:"61%",
                color:"#91CF60"
            },
    }
]

export default class UrbanResidents extends Component {
    render() {
        return (
            <div className="mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <DataStoriesContentCardContentBlock
                            contentHeading="How do fear and perception of danger affect urban residents? "
                            content="Fear and perceptions often trump actual rates of crime. This has a direct effect on how urban residents engage in public life and their feelings of safety in public space."
                        />

                    </div>
                    <div className="col-md-8">
                        <table className="ds-content-table">
                            <tr>
                                <th className="ds-content-table-header ds-content-table-header-empty"></th>
                                <th className="ds-content-table-header">JHB</th>
                                <th className="ds-content-table-header">CPT</th>
                                <th className="ds-content-table-header" >ETH</th>
                                <th className="ds-content-table-header">EKU</th>
                                <th className="ds-content-table-header">TSH</th>
                                <th className="ds-content-table-header">NMB</th>
                                <th className="ds-content-table-header">MAN</th>
                                <th className="ds-content-table-header">BCM</th>
                                <th className="ds-content-table-header">MSU</th>
                
                            </tr>
                            {tableData.map((item,i) =>
                                <tr>
                                    <th className="ds-content-table-header ds-content-table-header-sub">{item.title}</th>
                                    <td className="text-center ds-content-table-data" style={{backgroundColor:item.JHB.color}}>{item.JHB.percentage}</td>
                                    <td className="text-center ds-content-table-data" style={{backgroundColor:item.CPT.color}}>{item.CPT.percentage}</td>
                                    <td className="text-center ds-content-table-data" style={{backgroundColor:item.ETH.color}}>{item.ETH.percentage}</td>
                                    <td className="text-center ds-content-table-data " style={{backgroundColor:item.EKU.color}}>{item.EKU.percentage}</td>
                                    <td className="text-center ds-content-table-data" style={{backgroundColor:item.TSH.color}}>{item.TSH.percentage}</td>
                                    <td className="text-center ds-content-table-data" style={{backgroundColor:item.NMB.color}}>{item.NMB.percentage}</td>
                                    <td className="text-center ds-content-table-data" style={{backgroundColor:item.MAN.color}}>{item.MAN.percentage}</td>
                                    <td className="text-center ds-content-table-data" style={{backgroundColor:item.BCM.color}}>{item.BCM.percentage}</td>
                                    <td className="text-center ds-content-table-data" style={{backgroundColor:item.MSU.color}}>{item.MSU.percentage}</td>

                                    

                                </tr>
                            )}
                     
                        </table>
                          <p className="ds-content-table-name">Subjective Indicators of Crime</p>

                    </div>

                </div>
                <div className={"row ds-content-solutions "+this.props.className}>
                    <DataStoriesContentCardHighlightBlock
                        infoBlockTitle="Solutions:"
                        infoBlockText="City level data could enable city authorities to establish the ‘why’ and craft their responses according to place-specific drivers and to solve crime and violence challenges sustainably."
                        className="ds-content-card-highlight-block-header-title-carousel"
                    />
                </div>
            </div>
        )
    }
}