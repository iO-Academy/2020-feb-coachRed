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
            <a  href="#"
                onClick = {this.updatePage}
            >
                {this.props.label}
            </a>
        )
    }

    updatePage(e: React.MouseEvent) {
        e.preventDefault()
        console.log('click!')
        this.props.updateDisplayedPage(this.props.pageToLoad)
    }
}