import React from "react";
import { Component } from "react";
import DataStoriesContentCardContentBlock from '../components/DataStories.Content.Card.ContentBlock';

let resources = ` <ul style="margin-left:2%">
<li>Where can I read the full report? See the <a href="">SACN</a> and <a href="">SaferSpaces</a> webpages.</li>
<li>Download and analyse data at the <a href="">SCODA</a> webpage</li>
<li>Are there <a href="">events</a> I can join? (mini launches of the Report in SACN member cities – TBC)</li>
<li>What other publications should I be reading on this topic? 
    <ul style="margin-left:1%;list-style-type: none;">
        <li >- <a href="">Urban Safety Policy Briefs</a></li>
        <li>- <a href="">IUDF (CoGTA, 2016)</a></li>
        <li>- <a href="">NUA Localisation Framework (SACN, 2018)</a></li>
        <li>- <a href="">White Paper on Safety & Security (CSPS, 2017)</a></li>
        <li>- <a href="">Know Your Block Toolkit (SACN & SACPLAN, 2014)</a></li>
        <li>- <a href="">Participatory Safety Planning Toolkit (GIZ-VCP, 2016</a>)</li>
    </ul>
</li>
</ul>
<br/>
If you have any queries and further comment on this datastory, please email <a href="mailto:siphelele@sacities.net">Siphelele Ngobese</a> at SACN.`;
export default class Conclusion extends Component {
    render() {
        return (
            <div>
                <div className="mt-3">
                    <DataStoriesContentCardContentBlock
                        contentHeading="Conclusion"
                        content="The nine metropolitan cities of South Africa are where most crime types occur. At the same time they are places of opportunity, with a significant role in improving livelihoods. <br/>
                                  City level data and evidence are critical to planning and practice that respond to the structural and place-specific  drivers of violence and crime; so that cities are safe, liveable and inclusive. "
                    />
                </div>

                <div className="mt-4">
                    <DataStoriesContentCardContentBlock
                        contentHeading="Resources"
                        content={resources}
                    />
                </div>
            </div>
        )
    }
}