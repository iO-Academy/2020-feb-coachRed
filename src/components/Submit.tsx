import * as React from "react"

export interface SubmitButtonProps {
    sendResults(e: React.MouseEvent): void
    buttonName: string
}

export class Submit extends React.Component<SubmitButtonProps,{}> {
    render() {
        return(
            <button onClick={(e) => this.props.sendResults(e)}>
                {this.props.buttonName}
            </button>
        )
    }
}