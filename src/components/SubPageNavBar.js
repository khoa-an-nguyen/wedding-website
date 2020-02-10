import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import maryland from '../images/icons8-maryland-100.png'
import virginia from '../images/icons8-virginia-100.png'



const SubNavBar = () => {
    return (
        <div>
            <nav id="sub-nav">
                <Link to="/" className="button">
                    <span class="icon fa-chevron-circle-left"> </span>
                    Back To Home Page
                </Link>
            </nav>
        </div>
    )
}



export default SubNavBar