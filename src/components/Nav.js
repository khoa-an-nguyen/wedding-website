import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        {/* <div><span id="header-text" class="icon cursive-text">My-Anh & Khoa</span></div> */}
        <Scrollspy items={['intro', 'first', 'second', 'location', 'accommodations', 'faqs']} currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a id="logo-text" class="cursive-text" href="#">My-Anh & Khoa</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">The Party</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Schedule</a>
                </Scroll>
            </li>
            {/* Maybe create into own page and not section w/ smooth scroll? */}
            <li>
                <Scroll type="id" element="location">
                    <a href="#">Location</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="accommodations">
                    <a href="#">Accommodations</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="faqs">
                    <a href="#">FAQS</a>
                </Scroll>
            </li>
            {/* <li>
                <Scroll type="id" element="fourth">
                    <a href="#">Contact Us</a>
                </Scroll>
            </li> */}
        </Scrollspy>
    </nav>
)

export default Nav
