import * as React from "react"

import {CoachRegistration} from "./components/CoachRegistration"

export class App extends React.Component {
    
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="coachRegistration col-10 offset-1 bg-light">
                        <CoachRegistration></CoachRegistration>
                    </div>
                </div>
            </div>
        )
    }
}
