import * as React from "react"

export interface LabelProps {content: string, for: string}

export class Label extends React.Component<LabelProps, {}> {
    render() {
        return (
            <label htmlFor={this.props.for}>
                {this.props.content}
            </label>
        )
    }
}