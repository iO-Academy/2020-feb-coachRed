import * as React from "react"
import {Link} from "react-router-dom"

export class Navbar extends React.Component {
    render() {
        return(
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="#">Coach Red</Link>
            <ul className="navbar-nav mr-auto">
                <li>
                    <Link className="nav-link" to="/registerCoach">Register a Coach</Link>
                </li>
            </ul>
            <Link className="nav-link my-2 my-sm-0" to="/coachLogin">Coach Login</Link>
        </nav>)
    }
}