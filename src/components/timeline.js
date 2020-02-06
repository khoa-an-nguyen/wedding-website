import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => (
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 2012"
            iconStyle={{ background: 'rgb(90, 91, 93)', color: '#fff', textAlign: 'center' }}
            icon={<i className="flaticon-university"></i>}
        >
            <h3 className="vertical-timeline-element-title">When We Met</h3>
            <h4 className="vertical-timeline-element-subtitle">Harrisonburg, VA</h4>
            <p>My-Anh and Khoa met during their time in the Vietnamese Student Association (VSA) and quickly culminating into a close friendship. </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="October 20, 2012"
            iconStyle={{ background: 'rgb(90, 91, 93)', color: '#fff', textAlign: 'center' }}
            icon={<i className="flaticon-couple"></i>}
        >
            <h3 className="vertical-timeline-element-title">When We Became Official</h3>
            <h4 className="vertical-timeline-element-subtitle">Charlottesville, VA</h4>
            <p>After heading down to downtown Charlottesville, VA as a getaway from JMU and having some delicious dumplings from Maro and Luca, Khoa mustered up the courage to ask My-Anh to be his girlfriend!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 28, 2018"
            iconStyle={{ background: 'rgb(90, 91, 93)', color: '#fff', textAlign: 'center' }}
            icon={<i className="flaticon-wedding-ring"></i>}
        >
            <h3 className="vertical-timeline-element-title">The Engagement</h3>
            <h4 className="vertical-timeline-element-subtitle">Sint Maarten</h4>
            <p>
                6 years, a steep hill, and a couple of sweat marks later...after a journey on the Harmony of the Seas cruise with the Le Family,
                Khoa mustered up the courage and proposed to My-Anh!
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="October 02, 2020"
            style={{alignItems: 'center'}}
            iconStyle={{ background: 'rgb(90, 91, 93)', color: '#fff', textAlign: 'center' }}
            icon={<i className="flaticon-toast"></i>}
        >
            <h1 className="vertical-timeline-element-title">The Wedding!</h1>
            <h4 className="vertical-timeline-element-subtitle">Shadow Creek</h4>
            <h4 className="vertical-timeline-element-subtitle">Purcellville, VA</h4>
            <p>
                After 7 years and counting... we are so excited to have our family, friends, and loved ones to join us in celebrating our love!
            </p>
        </VerticalTimelineElement>
    </VerticalTimeline>
)

export default Timeline