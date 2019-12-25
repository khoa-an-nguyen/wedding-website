import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => (
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 2012"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<span></span>}
        >
            <h3 className="vertical-timeline-element-title">When We Met</h3>
            <h4 className="vertical-timeline-element-subtitle">Harrisonburg, VA</h4>
            <p>GISAT Class, VSA, Co-Org Mixer</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="October 20, 2012"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<span />}
        >
            <h3 className="vertical-timeline-element-title">When We Became Official</h3>
            <h4 className="vertical-timeline-element-subtitle">Charlottesville, VA</h4>
            <p>In downtown Charlottesville</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 28, 2018"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<span />}
        >
            <h3 className="vertical-timeline-element-title">Engagement 💍</h3>
            <h4 className="vertical-timeline-element-subtitle">Sint Maarten</h4>
            <p>
                After a journey on the Harmony of the Seas on a cruise with the Le Family,
                Khoa mustered up the courage and proposed to My-Anh. Along with his back sweat.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 02, 2020"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<span />}
        >
            <h1 className="vertical-timeline-element-title">The Wedding!</h1>
            <h4 className="vertical-timeline-element-subtitle">Shadow Creek</h4>
            <h4 className="vertical-timeline-element-subtitle">Purcellville, VA</h4>
            <p>
                Now join us to celebrate the wedding of the new Mr and Mrs Nguyen!
            </p>
        </VerticalTimelineElement>
    </VerticalTimeline>
)

export default Timeline