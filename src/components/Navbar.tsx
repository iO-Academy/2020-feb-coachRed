import * as React from "react"
import { Link } from "./Link"

export interface navbarProperties {
    slogan: string, 
    updateDisplayedPage(pageToLoad: string): void,
    links: Array<any>
}
export interface navbarState {}

export class Navbar extends React.Component<navbarProperties, navbarState> {
    render() {
        return(
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                {this.props.slogan}
            </a>
            {
                this.props.links.map(link => {
                    return (
                        <Link label={link.label} pageToLoad={link.pageToLoad} 
                        key={this.props.links.findIndex((entry)=>entry===link)}
                        updateDisplayedPage={this.props.updateDisplayedPage} />
                    )
                })
            }
        </nav>)
    }
}