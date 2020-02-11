import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => (
<VerticalTimeline layout={'1-column'}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<span class="icon fa-code"></span>}
  >
    <h3 className="vertical-timeline-element-title cursive-text">Ceremony</h3>
    <h4 className="vertical-timeline-element-subtitle">4:00PM - 5:00PM</h4>
    <p>
    Semi-Formal Attire! Ceremony will be on hard ground. Please arrive on time!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<span class="icon fa-code"></span>}
  >
    <h3 className="vertical-timeline-element-title cursive-text">Cocktail Hour</h3>
    <h4 className="vertical-timeline-element-subtitle">5:00PM - 6:00PM</h4>
    <p>
      Relax, mingle, and enjoy drinks after the ceremony!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<span class="icon fa-code"></span>}
  >
    <h3 className="vertical-timeline-element-title cursive-text">Reception</h3>
    <h4 className="vertical-timeline-element-subtitle">6:00PM - 11:00PM</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
)

export default Timeline