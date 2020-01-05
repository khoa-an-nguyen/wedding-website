import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={['intro', 'first', 'second', 'accommodations', 'location', 'faqs']} currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Home</a>
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
                <Scroll type="id" element="accommodations">
                    <a href="#">Accommodations</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="location">
                    <a href="#">Location</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="things-to-do">
                    <a href="#">FAQS</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="fourth">
                    <a href="#">Contact Us</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
