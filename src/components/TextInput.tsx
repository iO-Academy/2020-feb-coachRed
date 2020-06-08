import * as React from "react"

export interface TextInputProps {
    label : string, 
    fieldName : string, 
    fieldData : string,
    updateParent(fieldData: string): void
}

export class TextInput extends React.Component<TextInputProps, {}> {
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
                <input type="text" name={this.props.fieldName} id={this.props.fieldName}
                onChange={this.textInputChange}></input>
            </div>
        )
    }


}