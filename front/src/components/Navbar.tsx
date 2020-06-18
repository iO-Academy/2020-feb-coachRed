import * as React from "react"
import {Link} from "react-router-dom"

export class Navbar extends React.Component {

    logOut = () => {
        localStorage.removeItem('coachRedToken')
        window.location.href = "/coachSearch"
    }

    render() {
        return(
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="#">Coach Red</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link className="nav-link" to="/registerCoach">Register a Coach</Link>
                        <Link className="nav-link" to="/coachSearch">Find a Coach</Link>
                        <Link className="nav-link" to="/registerAthlete">Register an Athlete</Link>
                    </li>
                </ul>
            </div>
            <Link className="nav-link my-2 my-sm-0" to="/athleteLogin">Athlete Login</Link>
            <Link className="nav-link my-2 my-sm-0" to="/coachLogin">Coach Login</Link>
            {localStorage.getItem('coachRedToken') && <button className='btn btn-danger' onClick={this.logOut}>Log Out</button>}
        </nav>)
    }
}