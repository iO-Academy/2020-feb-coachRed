import * as React from "react"
import {Link} from "react-router-dom"

export class Navbar extends React.Component {
    render() {
        return(
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/registerCoach">Coach Red</Link>
            <ul className="navbar-nav mr-auto">
                <li>
                    <Link to="/registerCoach">Register a Coach</Link>
                </li>
                <li>
                    <Link to="/coachLogin">Coach Login</Link>
                </li>
            </ul>
        </nav>)
    }
}