import React from 'react';
import Faq from 'react-faq-component';
 
const data = {
  title: "Questions Not Listed? Please Contact Us!",
  rows: [
    {
      title: "Is there a registry?",
      content: "We are so happy that you’ll be able to join us for our wedding! Your presence at this special day alone is the greatest gift of all. As many of you know, we are currently saving up for our future home and plan on starting this next step in our journey after our wedding. If are you so kind to give us a gift for our wedding, we request that it is not physical in nature."
    },
    {
      title: "Can I bring a plus one?",
      content: `Per the guest limit at our venue, we will we not be able to accommodate special requests for additional guests to our wedding. Please follow the RSVPs since it will include the amount of people we intend to extend our invite for your family.`
    },
    {
      title: "What is the dress code?",
      content: `Semi-formal attire! The ceremony will take place outside behind the venue, and there will be a grassy area with a fire pit and where games will be available. However, as the night goes on and the lights start to dim feel free to loosen those buttons and lose those ties/heels!`
    },
    {
      title: "Transportation to Hotel?",
      content: "We are currently figuring out transporation once we have an accurate count on bookings / what hotels are plan on room blocking!"
    },
    {
      title: "Is there parking?",
      content: "The venue will have plenty of parking if you are planning on driving!"
    },
    {
      title: "Is there a room block as of now?",
      content: "Check out accomodations section! As of now we are working on finding the best possible hotel for a room block!"
    }
  ]
}
 
const styles = {
  // bgColor: 'white',
  titleTextColor: 'blue',
  rowTitleColor: 'black',
  rowContentColor: 'grey'
}

const Faqs = () => (
    <div>
        <Faq data={data} styles={styles}/>
    </div>
)

export default Faqs