import * as React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import {CoachRegistration} from "./components/CoachRegistration"
import { AthleteRegistration } from "./components/AthleteRegistration"
import CoachLogin from "./components/CoachLogin"
import { CoachAvailibility } from "./components/CoachAvailibility"
import {Navbar} from "./components/Navbar"
import ViewCoach from "./components/ViewCoach"
import CoachSearch from "./components/CoachSearch"

export class App extends React.Component {
    
    render() {
        return(
            <div className="page">
                <Router>
                    <Navbar/>
                    <div className="container">
                        <div className="row">
                            <div className="pageContent col-10 offset-1 bg-light">
                                <Switch>
                                    <Route path="/coachSearch" component={CoachSearch}/>
                                    <Route path="/registerCoach" component={CoachRegistration}/>
                                    <Route path="/coachLogin" component={CoachLogin} />
                                    <Route path="/coachAvailibility" component={CoachAvailibility }/>
                                    <Route path="/registerAthlete" component={AthleteRegistration} />
                                    <Route path="/viewCoach" component={ViewCoach} />
                                    <Route path="/" component={CoachSearch} />
                                    
                                    
                                </Switch>
                            </div>
                        </div>
                    </div>
                    <footer className="footer bg-light"><p><small>© Coach Red 2020</small></p></footer>
                </Router>
            </div>
        )
    }
}
