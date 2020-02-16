import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import plateIcon from '../assets/images/icons/001-plate.svg';
import drinkIcon from '../assets/images/icons/002-drinks.svg';
import ceremonyIcon from '../assets/images/icons/003-wedding-arch.svg';


const Timeline = () => (
<VerticalTimeline layout={'1-column'}>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#f2f3f4', color: '#636363' }}
    icon={<img className="timeline-icon" src={ceremonyIcon}></img>}
    
  >
    <h3 className="vertical-timeline-element-title cursive-text">Ceremony</h3>
    <h4 className="vertical-timeline-element-subtitle">4:00PM - 5:00PM</h4>
    <p className="timeline-content">
    Semi-Formal Attire! Ceremony will be on hard ground behind our venue. Please arrive on time!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#f2f3f4', color: '#636363' }}
    icon={<img className="timeline-icon" src={drinkIcon}></img>}
  >
    <h3 className="vertical-timeline-element-title cursive-text">Cocktail Hour</h3>
    <h4 className="vertical-timeline-element-subtitle">5:00PM - 6:00PM</h4>
    <p className="timeline-content">
      Relax, mingle, and enjoy drinks after the ceremony!
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#f2f3f4', color: '#636363' }}
    icon={<img src={plateIcon}></img>}
  >
    <h3 className="vertical-timeline-element-title cursive-text">Reception</h3>
    <h4 className="vertical-timeline-element-subtitle">6:00PM - 11:00PM</h4>
    <p className="timeline-content">
      Time to get your grub on, cheers to the happy couple, play games, and create new memories! 
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
)

export default Timeline