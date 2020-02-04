import React, { Component } from 'react';
import Faq from 'react-faq-component';
 
const data = {
//   title: "FAQ (How it works)",
  rows: [
    {
      title: "What is the dress code?",
      content: `Formal! Polish those shoes, and iron those dresses!`
    },
    {
      title: "Transportation to Hotel?",
      content: "Stay Tuned! We will be figuring out transporation once we have an accurate count on bookings."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem. 
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam. 
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat. 
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `
    },
    {
      title: "What is the package version",
      content: "v1.0.0"
    }]
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