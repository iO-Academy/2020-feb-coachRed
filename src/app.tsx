import * as React from "react"

import {CoachRegistration} from "./components/CoachRegistration"
import {Navbar} from "./components/Navbar"

export interface AppState {loadedPage: string}

export class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props)
        this.state = {
            loadedPage: "coachRegistration"
        }
        this.loadNewPage=this.loadNewPage.bind(this)
    }

    loadNewPage(pageToLoad: string): void {
        this.setState({loadedPage: pageToLoad})
    }
    
    render() {
        return(
            <div className="page">
                <Navbar slogan="Coach Red" updateDisplayedPage={this.loadNewPage} 
                    links={[{
                        label: "Register as Coach",
                        pageToLoad: "coachRegistration"
                    }]} />
                <div className="container">
                    <div className="row">
                        <div className="pageContent col-10 offset-1 bg-light">
                            {this.state.loadedPage === "coachRegistration" && <CoachRegistration></CoachRegistration>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
