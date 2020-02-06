import React, { Component } from 'react';
import Faq from 'react-faq-component';
 
const data = {
  title: "Question Not Listed? Please Contact Us!",
  rows: [
    {
      title: "Can I bring a plus one?",
      content: `Per the guest limit at our venue, we will we not be able to accommodate special requests for additional guests to our wedding. Please follow the RSVPs since it will include the amount of people we intend to extend our invite for your family.`
    },
    {
      title: "Is there a registry?",
      content: "We are so happy that you’ll be able to join us for our wedding! Your presence at this special day alone is the greatest gift of all. As many of you know, we are currently saving up for our future home and plan on starting this next step in our journey after our wedding. However, we are setting up a website to fund our honeymoon and future necessities that we will be purchasing for our future homes.. so no need to haul a gift!"
    },
    {
      title: "What is the dress code?",
      content: `Formal attire! However, as the long goes on and the lights start to dim feel free to loosen those buttons and lose those ties/heels!`
    },
    {
      title: "Transportation to Hotel?",
      content: "We are currently figuring out transporation once we have an accurate count on bookings / what hotels are plan on room blocking!"
    },
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