import * as React from "react"

export interface TextAreaProps {
    label : string, 
    fieldName : string, 
    fieldData : string | number
    updateParent(fieldData: string | number): void
}

export class TextArea extends React.Component<TextAreaProps, {}> {
    constructor(props: any) {
        super(props)
        this.textInputChange = this.textInputChange.bind(this)
    }

    // Event here must be cast as any to avoid a typescript bug where the target of a React.ChangeEvent does not
    // have a value attribute
    textInputChange(event: any){
        this.setState({fieldData: event.target.value})
        this.props.updateParent(event.target.value)
    }

    render() {
        return (
            <div className="formItem">
                <label htmlFor={this.props.fieldName}>{this.props.label}</label>
                <textarea
                    className="form-control" 
                    name={this.props.fieldName} 
                    id={this.props.fieldName} 
                    onChange={this.textInputChange}>
                </textarea>
            </div>
        )
    }


}