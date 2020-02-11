import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        {/* <div><span id="header-text" class="icon">October 2, 2020 Shadow Creek</span></div> */}
        <Scrollspy items={['intro', 'intro', 'first', 'second', 'location', 'accommodations', 'photo', 'faqs']} currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <div>
                        <a id="logo-text" class="cursive-text" href="#">#TheNewLeNguyens</a>
                    </div>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="intro">
                    <a class="nav-element" href="#">Home</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a class="nav-element" href="#">The Party</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a class="nav-element" href="#">Schedule</a>
                </Scroll>
            </li>
            {/* Maybe create into own page and not section w/ smooth scroll? */}
            <li>
                <Scroll type="id" element="location">
                    <a class="nav-element" href="#">Location</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="accommodations">
                    <a class="nav-element" href="#">Accommodations</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="photo">
                    <a class="nav-element" href="#">Photos</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="faqs">
                    <a class="nav-element" href="#">FAQS</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
