import * as React from "react"

export interface LinkProperties {
    label: string,
    pageToLoad: string,
    updateDisplayedPage(pageToLoad: string): void
}

export class Link extends React.Component<LinkProperties, {}> {
    constructor(props: any) {
        super(props)
        this.updatePage=this.updatePage.bind(this)
    }

    render() {
        return(
            <li className="nav-item">
                <a  
                    className="nav-link"
                    href="#"
                    onClick = {this.updatePage}
                >
                    {this.props.label}
                </a>
            </li>
        )
    }

    updatePage(e: React.MouseEvent) {
        e.preventDefault()
        this.props.updateDisplayedPage(this.props.pageToLoad)
    }
}