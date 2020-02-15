import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

class HamburgerMenu extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          menuOpen: false
        }
      }
    
      // This keeps your state in sync with the opening/closing of the menu
      // via the default means, e.g. clicking the X, pressing the ESC key etc.
      handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
      }
      
      // This can be used to close the menu, e.g. when a user clicks a menu item
      closeMenu () {
        this.setState({menuOpen: false})
      }
    
      // This can be used to toggle the menu, e.g. when using a custom icon
      // Tip: You probably want to hide either/both default icons if using a custom icon
      // See https://github.com/negomi/react-burger-menu#custom-icons
      toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
      }
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu id="hamburger-nav" isOpen={this.state.menuOpen}  onStateChange={(state) => this.handleStateChange(state)} right>
            <Scrollspy items={['intro', 'intro', 'first', 'second', 'location', 'accommodations', 'photo', 'faqs']} currentClassName="is-active" offset={-300}>
                <li>
                    <Scroll type="id" element="intro">
                        <div>
                            <a id="logo-text" className="cursive-text" href="#" onClick={() => this.closeMenu()}>#TheNewLeNguyens</a>
                        </div>
                    </Scroll>
                </li>
                <li>
                    <Scroll type="id" element="intro">
                        <div>
                        <a className="nav-element" href="#" onClick={() => this.closeMenu()}>Home</a>
                        </div>
                    </Scroll>
                </li>
                <li>
                    <Scroll type="id" element="first">
                        <div>
                            <a className="nav-element" href="#" onClick={() => this.closeMenu()}>The Party</a>
                        </div>
                    </Scroll>
                </li>
                <li>
                    <Scroll type="id" element="second">
                        <div>
                            <a className="nav-element" href="#" onClick={() => this.closeMenu()}>Schedule</a>
                        </div>
                    </Scroll>
                </li>
                {/* Maybe create into own page and not section w/ smooth scroll? */}
                <li>
                    <Scroll type="id" element="location">
                        <div>
                            <a className="nav-element" href="#" onClick={() => this.closeMenu()}>Location</a>
                        </div>
                    </Scroll>
                </li>
                <li>
                    <Scroll type="id" element="accommodations">
                    <div>
                        <a className="nav-element" href="#" onClick={() => this.closeMenu()}>Accommodations</a>
                    </div>
                    </Scroll>
                </li>
                <li>
                    <Scroll type="id" element="photo">
                    <div>
                        <a className="nav-element" href="#" onClick={() => this.closeMenu()}>Photos</a>
                    </div>
                    </Scroll>
                </li>
                <li>
                    <Scroll type="id" element="faqs">
                    <div>
                        <a className="nav-element" href="#" onClick={() => this.closeMenu()}>FAQS</a>
                    </div>
                    </Scroll>
                </li>
            </Scrollspy>
      </Menu>
    );
  }
}

export default HamburgerMenu